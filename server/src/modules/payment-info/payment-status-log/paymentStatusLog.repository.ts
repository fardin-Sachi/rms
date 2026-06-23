import type IRepository from '../../../shared/interfaces/repository.interface.js';
import type { PaymentStatusLogDto } from './dtos/paymentStatusLog.dto.js';
import type { CreatePaymentStatusLogDto } from './dtos/createPaymentStatusLog.dto.js';
import type { UpdatePaymentStatusLogDto } from './dtos/updatePaymentStatusLog.dto.js';
import PaymentStatus from '../shared/enums/paymentStatus.enum.js';

class PaymentStatusLogRepository implements IRepository<
  PaymentStatusLogDto,
  CreatePaymentStatusLogDto,
  UpdatePaymentStatusLogDto,
  number
> {
  async get(_id: number): Promise<PaymentStatusLogDto | null> {
    return null;
  }

  async getAll(): Promise<PaymentStatusLogDto[]> {
    return [];
  }

  async create(
    pMutable: CreatePaymentStatusLogDto,
  ): Promise<PaymentStatusLogDto> {
    return {
      ...pMutable,
      changedAt: pMutable.changedAt ?? new Date(),
    };
  }

  async createMany(
    _pMutableList: CreatePaymentStatusLogDto[],
  ): Promise<PaymentStatusLogDto[]> {
    return [];
  }

  async update(
    pMutable: UpdatePaymentStatusLogDto,
  ): Promise<PaymentStatusLogDto> {
    return {
      ...pMutable,
      paymentId: 1,
      paymentStatusId: PaymentStatus.PENDING,
      changedAt: pMutable.changedAt ?? new Date(),
    };
  }

  async updateMany(
    _pMutableList: UpdatePaymentStatusLogDto[],
  ): Promise<PaymentStatusLogDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default PaymentStatusLogRepository;
