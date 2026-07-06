import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Database } from '../../../infrastructures/database/index.database.js';
import type CustomerEntity from './entities/customer.entity.js';

class CustomerRepository extends BaseRepository<CustomerEntity, number> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }

  async get(_id: number): Promise<CustomerEntity | null> {
    return null;
  }

  async getAll(): Promise<CustomerEntity[]> {
    return [];
  }

  async create(pMutable: CustomerEntity): Promise<CustomerEntity> {
    return pMutable;
  }

  async createMany(_pMutableList: CustomerEntity[]): Promise<CustomerEntity[]> {
    return [];
  }

  async update(pMutable: CustomerEntity): Promise<CustomerEntity> {
    return pMutable;
  }

  async updateMany(_pMutableList: CustomerEntity[]): Promise<CustomerEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default CustomerRepository;
