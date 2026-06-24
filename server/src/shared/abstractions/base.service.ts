import type { ILogger } from '../interfaces/logger.interface.js';
import type IRepository from '../interfaces/repository.interface.js';

abstract class BaseService<
  TEntity,
  TCreateDto,
  TUpdateDto,
  TIdentifier = number,
  TRepository extends IRepository<
    TEntity,
    TCreateDto,
    TUpdateDto,
    TIdentifier
  > = IRepository<TEntity, TCreateDto, TUpdateDto, TIdentifier>,
> {
  protected constructor(
    protected readonly mLogger: ILogger,
    protected readonly mRepository: TRepository,
  ) {}

  async get(id: TIdentifier): Promise<TEntity | null> {
    return this.mRepository.get(id);
  }

  async getAll(): Promise<TEntity[]> {
    return this.mRepository.getAll();
  }

  async create(dto: TCreateDto): Promise<TEntity> {
    return this.mRepository.create(dto);
  }

  async createMany(dtos: TCreateDto[]): Promise<TEntity[]> {
    return this.mRepository.createMany(dtos);
  }

  async update(dto: TUpdateDto): Promise<TEntity> {
    return this.mRepository.update(dto);
  }

  async updateMany(dtos: TUpdateDto[]): Promise<TEntity[]> {
    return this.mRepository.updateMany(dtos);
  }

  async delete(id: TIdentifier): Promise<void> {
    this.mRepository.delete(id);
  }

  async deleteMany(ids: TIdentifier[]): Promise<void> {
    this.mRepository.deleteMany(ids);
  }
}

export default BaseService;
