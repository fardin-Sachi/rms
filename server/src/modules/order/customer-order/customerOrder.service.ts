import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import CustomerOrderRepository from './customerOrder.repository.js';
import type { CustomerOrderDto } from './dtos/customerOrder.dto.js';
import type { CreateCustomerOrderDto } from './dtos/createCustomerOrder.dto.js';
import type { UpdateCustomerOrderDto } from './dtos/updateCustomerOrder.dto.js';
import type CustomerOrderEntity from './entities/customerOrder.entity.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type CustomerOrderMapper from './mappers/customerOrder.mapper.js';

class CustomerOrderService extends BaseService<
  CustomerOrderDto,
  CreateCustomerOrderDto,
  UpdateCustomerOrderDto,
  CustomerOrderEntity,
  number,
  CustomerOrderRepository
> {
  constructor(
    mLogger: ILogger,
    mRepository: CustomerOrderRepository,
    mMapper: CustomerOrderMapper,
  ) {
    super(mLogger, mRepository, mMapper);
  }
}

export default CustomerOrderService;
