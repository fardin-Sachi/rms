import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import OrderStatusLogRepository from './orderStatusLog.repository.js';
import type { OrderStatusLogDto } from './dtos/orderStatusLog.dto.js';
import type { CreateOrderStatusLogDto } from './dtos/createOrderStatusLog.dto.js';
import type { UpdateOrderStatusLogDto } from './dtos/updateOrderStatusLog.dto.js';
import type OrderStatusLogEntity from './entities/orderStatusLog.entity.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type OrderStatusLogMapper from './mappers/orderStatusLog.mapper.js';

class OrderStatusLogService extends BaseService<
  OrderStatusLogDto,
  CreateOrderStatusLogDto,
  UpdateOrderStatusLogDto,
  OrderStatusLogEntity,
  number,
  OrderStatusLogRepository
> {
  constructor(
    mLogger: ILogger,
    mRepository: OrderStatusLogRepository,
    mMapper: OrderStatusLogMapper,
  ) {
    super(mLogger, mRepository, mMapper);
  }
}

export default OrderStatusLogService;
