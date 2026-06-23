import type IRepository from '../../../shared/interfaces/repository.interface.js';
import Big from 'big.js';
import type { PaymentDto } from './dtos/payment.dto.js';
import type { CreatePaymentDto } from './dtos/createPayment.dto.js';
import type { UpdatePaymentDto } from './dtos/updatePayment.dto.js';
import PaymentType from '../shared/enums/paymentType.enum.js';
import PaymentStatus from '../shared/enums/paymentStatus.enum.js';

class PaymentRepository implements IRepository<
  PaymentDto,
  CreatePaymentDto,
  UpdatePaymentDto,
  number
> {
  async get(_id: number): Promise<PaymentDto | null> {
    return null;
  }

  async getAll(): Promise<PaymentDto[]> {
    return [];
  }

  async create(pMutable: CreatePaymentDto): Promise<PaymentDto> {
    return {
      id: 1,
      ...pMutable,
      paymentTime: pMutable.paymentTime ?? new Date(),
    };
  }

  async createMany(_pMutableList: CreatePaymentDto[]): Promise<PaymentDto[]> {
    return [];
  }

  async update(pMutable: UpdatePaymentDto): Promise<PaymentDto> {
    return {
      ...pMutable,
      customerOrderId: 1,
      paymentTypeId: pMutable.paymentTypeId ?? PaymentType.CASH,
      transactionId: pMutable.transactionId ?? 'onekborotransactionid',
      amount: pMutable.amount ?? new Big(3000),
      currentPaymentStatusId:
        pMutable.currentPaymentStatusId ?? PaymentStatus.PENDING,
      paymentTime: pMutable.paymentTime ?? new Date(),
    };
  }

  async updateMany(_pMutableList: UpdatePaymentDto[]): Promise<PaymentDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default PaymentRepository;
