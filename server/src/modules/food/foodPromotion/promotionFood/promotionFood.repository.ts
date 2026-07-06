import type { Database } from '../../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type PromotionFoodEntity from './entities/promotionFood.entity.js';

class PromotionFoodRepository extends BaseRepository<
  PromotionFoodEntity,
  { promotionId: number; foodMenuId: number }
> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }

  async get(_id: {
    promotionId: number;
    foodMenuId: number;
  }): Promise<PromotionFoodEntity | null> {
    return null;
  }

  async getAll(): Promise<PromotionFoodEntity[]> {
    return [];
  }

  async create(pMutable: PromotionFoodEntity): Promise<PromotionFoodEntity> {
    return pMutable;
  }

  async createMany(
    pMutableList: PromotionFoodEntity[],
  ): Promise<PromotionFoodEntity[]> {
    return pMutableList;
  }

  async update(pMutable: PromotionFoodEntity): Promise<PromotionFoodEntity> {
    return pMutable;
  }

  async updateMany(
    pMutableList: PromotionFoodEntity[],
  ): Promise<PromotionFoodEntity[]> {
    return pMutableList;
  }

  async delete(_id: {
    promotionId: number;
    foodMenuId: number;
  }): Promise<void> {
    return;
  }

  async deleteMany(
    _ids: { promotionId: number; foodMenuId: number }[],
  ): Promise<void> {
    return;
  }

  async getByPromotionId(_promotionId: number): Promise<PromotionFoodEntity[]> {
    return [];
  }

  async deleteByPromotionId(_promotionId: number): Promise<void> {
    return;
  }
}

export default PromotionFoodRepository;
