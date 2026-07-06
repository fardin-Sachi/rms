import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { PaymentDto } from './dtos/payment.dto.js';
import PaymentRepository from './payment.repository.js';
import type { CreatePaymentDto } from './dtos/createPayment.dto.js';
import type { UpdatePaymentDto } from './dtos/updatePayment.dto.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type PaymentEntity from './entities/payment.entity.js';
import type PaymentMapper from './mappers/payment.mapper.js';

class PaymentService extends BaseService<
  PaymentDto,
  CreatePaymentDto,
  UpdatePaymentDto,
  PaymentEntity,
  number,
  PaymentRepository
> {
  constructor(
    mLogger: ILogger,
    mRepository: PaymentRepository,
    mMapper: PaymentMapper,
  ) {
    super(mLogger, mRepository, mMapper);
  }
}

export default PaymentService;
