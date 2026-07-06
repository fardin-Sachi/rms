import type { Database } from '../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type OrderStatusLogEntity from './entities/orderStatusLog.entity.js';

class OrderStatusLogRepository extends BaseRepository<
  OrderStatusLogEntity,
  number
> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }
  async get(_id: number): Promise<OrderStatusLogEntity | null> {
    return null;
  }

  async getAll(): Promise<OrderStatusLogEntity[]> {
    return [];
  }

  async create(pMutable: OrderStatusLogEntity): Promise<OrderStatusLogEntity> {
    return pMutable;
  }

  async createMany(
    _pMutableList: OrderStatusLogEntity[],
  ): Promise<OrderStatusLogEntity[]> {
    return [];
  }

  async update(pMutable: OrderStatusLogEntity): Promise<OrderStatusLogEntity> {
    return pMutable;
  }

  async updateMany(
    _pMutableList: OrderStatusLogEntity[],
  ): Promise<OrderStatusLogEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default OrderStatusLogRepository;
