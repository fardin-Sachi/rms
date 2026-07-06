import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import PaymentStatusLogRepository from './paymentStatusLog.repository.js';
import type { PaymentStatusLogDto } from './dtos/paymentStatusLog.dto.js';
import type { CreatePaymentStatusLogDto } from './dtos/createPaymentStatusLog.dto.js';
import type { UpdatePaymentStatusLogDto } from './dtos/updatePaymentStatusLog.dto.js';
import type PaymentStatusLogEntity from './entities/paymentStatusLog.entity.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type PaymentStatusLogMapper from './mappers/paymentStatusLog.mapper.js';

class PaymentStatusLogService extends BaseService<
  PaymentStatusLogDto,
  CreatePaymentStatusLogDto,
  UpdatePaymentStatusLogDto,
  PaymentStatusLogEntity,
  number,
  PaymentStatusLogRepository
> {
  constructor(
    mLogger: ILogger,
    mRepository: PaymentStatusLogRepository,
    mMapper: PaymentStatusLogMapper,
  ) {
    super(mLogger, mRepository, mMapper);
  }
}

export default PaymentStatusLogService;
