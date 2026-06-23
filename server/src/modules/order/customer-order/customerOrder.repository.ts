import type IRepository from '../../../shared/interfaces/repository.interface.js';
import type { CreateCustomerOrderDto } from './dtos/createCustomerOrder.dto.js';
import type { UpdateCustomerOrderDto } from './dtos/updateCustomerOrder.dto.js';
import type { CustomerOrderDto } from './dtos/customerOrder.dto.js';
import Big from 'big.js';

class CustomerOrderRepository implements IRepository<
  CustomerOrderDto,
  CreateCustomerOrderDto,
  UpdateCustomerOrderDto
> {
  async get(_id: number): Promise<CustomerOrderDto | null> {
    return null;
  }

  async getAll(): Promise<CustomerOrderDto[]> {
    return [];
  }

  async create(pMutable: CreateCustomerOrderDto): Promise<CustomerOrderDto> {
    return {
      id: 1,
      orderNumber: pMutable.orderNumber ?? 'Have a relax!',
      ...pMutable,
    };
  }

  async createMany(
    _pMutableList: CreateCustomerOrderDto[],
  ): Promise<CustomerOrderDto[]> {
    return [];
  }

  async update(pMutable: UpdateCustomerOrderDto): Promise<CustomerOrderDto> {
    return {
      id: pMutable.id,
      employeeId: pMutable.employeeId ?? 420,
      orderTime: pMutable.orderTime ?? new Date(),
      subtotal: pMutable.subtotal ?? new Big(200),
      netTotal: pMutable.netTotal ?? new Big(500),
      orderStatusId: pMutable.orderStatusId ?? 1,
      orderNumber: 'Have a relax again!',
    };
  }

  async updateMany(
    _pMutableList: UpdateCustomerOrderDto[],
  ): Promise<CustomerOrderDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default CustomerOrderRepository;
