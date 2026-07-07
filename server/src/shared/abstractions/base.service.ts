import type { ICache } from '../../infrastructures/cache/cache.interface.js';
import type IDto from '../interfaces/dto.interface.js';
import type { ILogger } from '../interfaces/logger.interface.js';
import type { IEntityMapper } from '../interfaces/mapper.interface.js';
import type IRepository from '../interfaces/repository.interface.js';

abstract class BaseService<
  TDto extends IDto<TId>,
  TCreateDto,
  TUpdateDto extends IDto<TId>,
  TEntity,
  TId,
  TRepository extends IRepository<TEntity, TId>,
> {
  protected constructor(
    protected readonly mLogger: ILogger,
    protected readonly mCache: ICache,
    protected readonly mRepository: TRepository,
    protected readonly mMapper: IEntityMapper<
      TEntity,
      TDto,
      TCreateDto,
      TUpdateDto
    >,
  ) {}

  async get(id: TId): Promise<TDto | null> {
    const entity = await this.mRepository.get(id);

    return entity ? this.mMapper.toDto(entity) : null;
  }

  async getAll(): Promise<TDto[]> {
    const entities = await this.mRepository.getAll();

    return entities.map((entity) => this.mMapper.toDto(entity));
  }

  async create(dto: TCreateDto): Promise<TDto> {
    const entity = this.mMapper.fromCreateDto(dto);

    const created = await this.mRepository.create(entity);

    return this.mMapper.toDto(created);
  }

  async createMany(dtos: TCreateDto[]): Promise<TDto[]> {
    const entities = dtos.map((dto) => this.mMapper.fromCreateDto(dto));
    const created = await this.mRepository.createMany(entities);

    return created.map((entity) => this.mMapper.toDto(entity));
  }

  async update(dto: TUpdateDto): Promise<TDto> {
    const entity = await this.mRepository.get(dto.id);

    if (!entity) throw new Error('Entity not found');

    this.mMapper.updateEntity(entity, dto);

    const updated = await this.mRepository.update(entity);

    return this.mMapper.toDto(updated);
  }

  async updateMany(dtos: TUpdateDto[]): Promise<TDto[]> {
    const entities: TEntity[] = [];

    for (const dto of dtos) {
      const entity = await this.mRepository.get(dto.id);

      if (!entity) throw new Error('Entity not found');

      this.mMapper.updateEntity(entity, dto);

      entities.push(entity);
    }

    const updated = await this.mRepository.updateMany(entities);

    return updated.map((e) => this.mMapper.toDto(e));
  }

  async delete(id: TId): Promise<void> {
    await this.mRepository.delete(id);
  }

  async deleteMany(ids: TId[]): Promise<void> {
    await this.mRepository.deleteMany(ids);
  }

  protected getCacheKey(id: TId): string {
    return `${this.constructor.name}:${String(id)}`;
  }

  protected getAllCacheKey(): string {
    return `${this.constructor.name}:all`;
  }
}

export default BaseService;
