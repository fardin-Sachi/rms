import type { Database } from '../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type PaymentEntity from './entities/payment.entity.js';

class PaymentRepository extends BaseRepository<PaymentEntity, number> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }

  async get(_id: number): Promise<PaymentEntity | null> {
    return null;
  }

  async getAll(): Promise<PaymentEntity[]> {
    return [];
  }

  async create(pMutable: PaymentEntity): Promise<PaymentEntity> {
    return pMutable;
  }

  async createMany(_pMutableList: PaymentEntity[]): Promise<PaymentEntity[]> {
    return [];
  }

  async update(pMutable: PaymentEntity): Promise<PaymentEntity> {
    return pMutable;
  }

  async updateMany(_pMutableList: PaymentEntity[]): Promise<PaymentEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default PaymentRepository;
