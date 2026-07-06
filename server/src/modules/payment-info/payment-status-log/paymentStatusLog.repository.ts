import type { Database } from '../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type PaymentStatusLogEntity from './entities/paymentStatusLog.entity.js';

class PaymentStatusLogRepository extends BaseRepository<
  PaymentStatusLogEntity,
  number
> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }

  async get(_id: number): Promise<PaymentStatusLogEntity | null> {
    return null;
  }

  async getAll(): Promise<PaymentStatusLogEntity[]> {
    return [];
  }

  async create(
    pMutable: PaymentStatusLogEntity,
  ): Promise<PaymentStatusLogEntity> {
    return pMutable;
  }

  async createMany(
    _pMutableList: PaymentStatusLogEntity[],
  ): Promise<PaymentStatusLogEntity[]> {
    return [];
  }

  async update(
    pMutable: PaymentStatusLogEntity,
  ): Promise<PaymentStatusLogEntity> {
    return pMutable;
  }

  async updateMany(
    _pMutableList: PaymentStatusLogEntity[],
  ): Promise<PaymentStatusLogEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default PaymentStatusLogRepository;
