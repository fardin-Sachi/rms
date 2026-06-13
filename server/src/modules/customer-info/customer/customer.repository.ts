import type IRepository from '../../../shared/interfaces/repository.interface.js';
import type { CustomerDto } from './dtos/customer.dto.js';
import type CreateCustomerDto from './dtos/createCustomer.dto.js';
import type UpdateCustomerDto from './dtos/updateCustomer.dto.js';

class CustomerRepository implements IRepository<
  CustomerDto,
  CreateCustomerDto,
  UpdateCustomerDto,
  number
> {
  async get(_id: number): Promise<CustomerDto | null> {
    return null;
  }

  async getAll(): Promise<CustomerDto[]> {
    return [];
  }

  async create(pMutable: CreateCustomerDto): Promise<CustomerDto> {
    return {
      id: 1,
      ...pMutable,
    };
  }

  async createMany(_pMutableList: CreateCustomerDto[]): Promise<CustomerDto[]> {
    return [];
  }

  async update(pMutable: UpdateCustomerDto): Promise<CustomerDto> {
    return {
      id: pMutable.id,
      name: pMutable.name ?? 'Customer',
      contact: pMutable.contact ?? '',
      email: pMutable.email ?? '',
    };
  }

  async updateMany(_pMutableList: UpdateCustomerDto[]): Promise<CustomerDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default CustomerRepository;
