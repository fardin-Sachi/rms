import type { Database } from '../../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type BuyXGetYRuleEntity from './entities/buyXGetYRule.entity.js';

class BuyXGetYRuleRepository extends BaseRepository<
  BuyXGetYRuleEntity,
  number
> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }
  async get(_id: number): Promise<BuyXGetYRuleEntity | null> {
    return null;
  }

  async getAll(): Promise<BuyXGetYRuleEntity[]> {
    return [];
  }

  async create(pMutable: BuyXGetYRuleEntity): Promise<BuyXGetYRuleEntity> {
    return pMutable;
  }

  async createMany(
    _pMutableList: BuyXGetYRuleEntity[],
  ): Promise<BuyXGetYRuleEntity[]> {
    return [];
  }

  async update(pMutable: BuyXGetYRuleEntity): Promise<BuyXGetYRuleEntity> {
    return pMutable;
  }

  async updateMany(
    _pMutableList: BuyXGetYRuleEntity[],
  ): Promise<BuyXGetYRuleEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default BuyXGetYRuleRepository;
