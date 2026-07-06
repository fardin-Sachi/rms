import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import BuyXGetYRuleRepository from './BuyXGetYRule.repository.js';
import type { BuyXGetYRuleDto } from './dtos/buyXGetYRule.dto.js';
import type { CreateBuyXGetYRuleDto } from './dtos/createBuyXGetYRule.dto.js';
import type { UpdateBuyXGetYRuleDto } from './dtos/updateBuyXGetYRule.dto.js';
import type BuyXGetYRuleEntity from './entities/buyXGetYRule.entity.js';

class BuyXGetYRuleService {
  constructor(
    protected readonly mLogger: ILogger,
    protected readonly mRepository: BuyXGetYRuleRepository,
    protected readonly mMapper: IEntityMapper<
      BuyXGetYRuleEntity,
      BuyXGetYRuleDto,
      CreateBuyXGetYRuleDto,
      UpdateBuyXGetYRuleDto
    >,
  ) {}

  async get(promotionId: number): Promise<BuyXGetYRuleDto | null> {
    const entity = await this.mRepository.get(promotionId);

    return entity ? this.mMapper.toDto(entity) : null;
  }

  async getAll(): Promise<BuyXGetYRuleDto[]> {
    const entities = await this.mRepository.getAll();

    return entities.map((entity) => this.mMapper.toDto(entity));
  }

  async create(dto: CreateBuyXGetYRuleDto): Promise<BuyXGetYRuleDto> {
    const entity = this.mMapper.fromCreateDto(dto);

    const created = await this.mRepository.create(entity);

    return this.mMapper.toDto(created);
  }

  async createMany(dtos: CreateBuyXGetYRuleDto[]): Promise<BuyXGetYRuleDto[]> {
    const entities = dtos.map((dto) => this.mMapper.fromCreateDto(dto));
    const created = await this.mRepository.createMany(entities);

    return created.map((entity) => this.mMapper.toDto(entity));
  }

  async update(dto: UpdateBuyXGetYRuleDto): Promise<BuyXGetYRuleDto> {
    const entity: BuyXGetYRuleEntity | null = await this.mRepository.get(
      dto.promotionId,
    );

    if (!entity) throw new Error('Entity not found');

    this.mMapper.updateEntity(entity, dto);

    const updated = await this.mRepository.update(entity);

    return this.mMapper.toDto(updated);
  }

  async updateMany(dtos: UpdateBuyXGetYRuleDto[]): Promise<BuyXGetYRuleDto[]> {
    const entities: BuyXGetYRuleEntity[] = [];

    for (const dto of dtos) {
      const entity = await this.mRepository.get(dto.promotionId);

      if (!entity) throw new Error('Entity not found');

      this.mMapper.updateEntity(entity, dto);

      entities.push(entity);
    }

    const updated = await this.mRepository.updateMany(entities);

    return updated.map((e) => this.mMapper.toDto(e));
  }

  async delete(promotionId: number): Promise<void> {
    await this.mRepository.delete(promotionId);
  }

  async deleteMany(ids: number[]): Promise<void> {
    await this.mRepository.deleteMany(ids);
  }
}

export default BuyXGetYRuleService;
