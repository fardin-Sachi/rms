import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import CustomerRepository from './customer.repository.js';
import type { CustomerDto } from './dtos/customer.dto.js';
import type CreateCustomerDto from './dtos/createCustomer.dto.js';
import type UpdateCustomerDto from './dtos/updateCustomer.dto.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type CustomerEntity from './entities/customer.entity.js';
import type CustomerMapper from './mappers/customer.mapper.js';

class CustomerService extends BaseService<
  CustomerDto,
  CreateCustomerDto,
  UpdateCustomerDto,
  CustomerEntity,
  number,
  CustomerRepository
> {
  constructor(
    mLogger: ILogger,
    mRepository: CustomerRepository,
    mMapper: CustomerMapper,
  ) {
    super(mLogger, mRepository, mMapper);
  }
}

export default CustomerService;
