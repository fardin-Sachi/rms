import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import OrderDetailRepository from './orderDetail.repository.js';
import type { OrderDetailDto } from './dtos/orderDetail.dto.js';
import type { CreateOrderDetailDto } from './dtos/createOrderDetail.dto.js';
import type { UpdateOrderDetailDto } from './dtos/updateOrderDetail.dto.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type OrderDetailEntity from './entities/orderDetail.entity.js';
import type OrderDetailMapper from './mappers/orderDetail.mapper.js';

class OrderDetailService extends BaseService<
  OrderDetailDto,
  CreateOrderDetailDto,
  UpdateOrderDetailDto,
  OrderDetailEntity,
  number,
  OrderDetailRepository
> {
  constructor(
    mLogger: ILogger,
    mRepository: OrderDetailRepository,
    mMapper: OrderDetailMapper,
  ) {
    super(mLogger, mRepository, mMapper);
  }
}

export default OrderDetailService;
