import type { Database } from '../../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type DiscountRuleEntity from './entities/discountRule.entity.js';

class DiscountRuleRepository extends BaseRepository<
  DiscountRuleEntity,
  number
> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }
  async get(_id: number): Promise<DiscountRuleEntity | null> {
    return null;
  }

  async getAll(): Promise<DiscountRuleEntity[]> {
    return [];
  }

  async create(pMutable: DiscountRuleEntity): Promise<DiscountRuleEntity> {
    return pMutable;
  }

  async createMany(
    _pMutableList: DiscountRuleEntity[],
  ): Promise<DiscountRuleEntity[]> {
    return [];
  }

  async update(pMutable: DiscountRuleEntity): Promise<DiscountRuleEntity> {
    return pMutable;
  }

  async updateMany(
    _pMutableList: DiscountRuleEntity[],
  ): Promise<DiscountRuleEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default DiscountRuleRepository;
