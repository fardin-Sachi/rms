import type { Database } from '../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type RestaurantTableEntity from './entities/restaurantTable.entities.js';

class RestaurantTableRepository extends BaseRepository<
  RestaurantTableEntity,
  number
> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }

  async get(_id: number): Promise<RestaurantTableEntity | null> {
    return null;
  }

  async getAll(): Promise<RestaurantTableEntity[]> {
    return [];
  }

  async create(
    pMutable: RestaurantTableEntity,
  ): Promise<RestaurantTableEntity> {
    return pMutable;
  }

  async createMany(
    _pMutableList: RestaurantTableEntity[],
  ): Promise<RestaurantTableEntity[]> {
    return [];
  }

  async update(
    pMutable: RestaurantTableEntity,
  ): Promise<RestaurantTableEntity> {
    return pMutable;
  }

  async updateMany(
    _pMutableList: RestaurantTableEntity[],
  ): Promise<RestaurantTableEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default RestaurantTableRepository;
