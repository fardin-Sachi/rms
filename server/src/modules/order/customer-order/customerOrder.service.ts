import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import CustomerOrderRepository from './customerOrder.repository.js';
import type { CustomerOrderDto } from './dtos/customerOrder.dto.js';
import type { CreateCustomerOrderDto } from './dtos/createCustomerOrder.dto.js';
import type { UpdateCustomerOrderDto } from './dtos/updateCustomerOrder.dto.js';
import type CustomerOrderEntity from './entities/customerOrder.entity.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type CustomerOrderMapper from './mappers/customerOrder.mapper.js';
import type { ICache } from '../../../infrastructures/cache/cache.interface.js';

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
    mCache: ICache,
    mRepository: CustomerOrderRepository,
    mMapper: CustomerOrderMapper,
  ) {
    super(mLogger, mCache, mRepository, mMapper);
  }
}

export default CustomerOrderService;
