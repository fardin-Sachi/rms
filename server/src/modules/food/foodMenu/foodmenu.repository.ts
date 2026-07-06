import type { Database } from '../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type FoodMenuEntity from './entities/foodMenu.entity.js';

class FoodMenuRepository extends BaseRepository<FoodMenuEntity, number> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }
  async get(_id: number): Promise<FoodMenuEntity | null> {
    return null;
  }

  async getAll(): Promise<FoodMenuEntity[]> {
    return [];
  }

  async create(pMutable: FoodMenuEntity): Promise<FoodMenuEntity> {
    return pMutable;
  }

  async createMany(_pMutableList: FoodMenuEntity[]): Promise<FoodMenuEntity[]> {
    return [];
  }

  async update(pMutable: FoodMenuEntity): Promise<FoodMenuEntity> {
    return pMutable;
  }

  async updateMany(_pMutableList: FoodMenuEntity[]): Promise<FoodMenuEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default FoodMenuRepository;
