import type { Database } from '../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type OrderDetailEntity from './entities/orderDetail.entity.js';

class OrderDetailRepository extends BaseRepository<OrderDetailEntity, number> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }
  async get(_id: number): Promise<OrderDetailEntity | null> {
    return null;
  }

  async getAll(): Promise<OrderDetailEntity[]> {
    return [];
  }

  async create(pMutable: OrderDetailEntity): Promise<OrderDetailEntity> {
    return pMutable;
  }

  async createMany(
    _pMutableList: OrderDetailEntity[],
  ): Promise<OrderDetailEntity[]> {
    return [];
  }

  async update(pMutable: OrderDetailEntity): Promise<OrderDetailEntity> {
    return pMutable;
  }

  async updateMany(
    _pMutableList: OrderDetailEntity[],
  ): Promise<OrderDetailEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default OrderDetailRepository;
