import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import CustomerRepository from './customer.repository.js';
import type { CustomerDto } from './dtos/customer.dto.js';
import type CreateCustomerDto from './dtos/createCustomer.dto.js';
import type UpdateCustomerDto from './dtos/updateCustomer.dto.js';

class CustomerService {
  private readonly customerRepository: CustomerRepository;

  constructor(private readonly logger: ILogger) {
    this.customerRepository = new CustomerRepository();
  }

  async get(id: number): Promise<CustomerDto | null> {
    return this.customerRepository.get(id);
  }

  async getAll(): Promise<CustomerDto[]> {
    return this.customerRepository.getAll();
  }

  async create(pMutable: CreateCustomerDto): Promise<CustomerDto> {
    return this.customerRepository.create(pMutable);
  }

  async createMany(pMutableList: CreateCustomerDto[]): Promise<CustomerDto[]> {
    return this.customerRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdateCustomerDto): Promise<CustomerDto> {
    return this.customerRepository.update(pMutable);
  }

  async updateMany(pMutableList: UpdateCustomerDto[]): Promise<CustomerDto[]> {
    return this.customerRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.customerRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.customerRepository.deleteMany(ids);
  }
}

export default CustomerService;
