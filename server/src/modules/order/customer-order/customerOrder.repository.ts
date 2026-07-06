import type { Database } from '../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type CustomerOrderEntity from './entities/customerOrder.entity.js';

class CustomerOrderRepository extends BaseRepository<
  CustomerOrderEntity,
  number
> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }
  async get(_id: number): Promise<CustomerOrderEntity | null> {
    return null;
  }

  async getAll(): Promise<CustomerOrderEntity[]> {
    return [];
  }

  async create(pMutable: CustomerOrderEntity): Promise<CustomerOrderEntity> {
    return pMutable;
  }

  async createMany(
    _pMutableList: CustomerOrderEntity[],
  ): Promise<CustomerOrderEntity[]> {
    return [];
  }

  async update(pMutable: CustomerOrderEntity): Promise<CustomerOrderEntity> {
    return pMutable;
  }

  async updateMany(
    _pMutableList: CustomerOrderEntity[],
  ): Promise<CustomerOrderEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default CustomerOrderRepository;
