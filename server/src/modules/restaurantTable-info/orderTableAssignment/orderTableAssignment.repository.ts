import type IRepository from '../../../shared/interfaces/repository.interface.js';
import type { CreateOrderTableAssignmentDto } from './dtos/createOrderTableAssignment.dto.js';
import type { UpdateOrderTableAssignmentDto } from './dtos/updateOrderTableAssignment.dto.js';
import type { OrderTableAssignmentDto } from './dtos/orderTableAssignment.dto.js';
import { BadRequestError } from '../../../shared/errors/BadRequestError.js';

class EmployeeRepository implements IRepository<
  OrderTableAssignmentDto,
  CreateOrderTableAssignmentDto,
  UpdateOrderTableAssignmentDto,
  number
> {
  async get(_id: number): Promise<OrderTableAssignmentDto | null> {
    throw new BadRequestError('Method not needed');
  }

  async getByCustomerId(_id: number): Promise<OrderTableAssignmentDto | null> {
    return null;
  }

  async getByRestaurantTable(
    _id: number,
  ): Promise<OrderTableAssignmentDto | null> {
    return null;
  }

  async getAll(): Promise<OrderTableAssignmentDto[]> {
    return [];
  }

  async create(
    pMutable: CreateOrderTableAssignmentDto,
  ): Promise<OrderTableAssignmentDto> {
    return {
      ...pMutable,
    };
  }

  async createMany(
    _pMutableList: CreateOrderTableAssignmentDto[],
  ): Promise<OrderTableAssignmentDto[]> {
    return [];
  }

  async update(
    pMutable: UpdateOrderTableAssignmentDto,
  ): Promise<OrderTableAssignmentDto> {
    return {
      ...pMutable,
      customerOrderId: pMutable.customerOrderId ?? 1,
      restaurantTableId: pMutable.restaurantTableId ?? 1,
    };
  }

  async updateMany(
    _pMutableList: UpdateOrderTableAssignmentDto[],
  ): Promise<OrderTableAssignmentDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default EmployeeRepository;
