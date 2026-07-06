import type { Database } from '../../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type PromotionEntity from './entities/promotion.entity.js';

class PromotionRepository extends BaseRepository<PromotionEntity, number> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }
  async get(_id: number): Promise<PromotionEntity | null> {
    return null;
  }

  async getAll(): Promise<PromotionEntity[]> {
    return [];
  }

  async create(pMutable: PromotionEntity): Promise<PromotionEntity> {
    return pMutable;
  }

  async createMany(
    _pMutableList: PromotionEntity[],
  ): Promise<PromotionEntity[]> {
    return [];
  }

  async update(pMutable: PromotionEntity): Promise<PromotionEntity> {
    return pMutable;
  }

  async updateMany(
    _pMutableList: PromotionEntity[],
  ): Promise<PromotionEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default PromotionRepository;
