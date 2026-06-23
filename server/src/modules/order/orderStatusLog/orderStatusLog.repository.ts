import type IRepository from '../../../shared/interfaces/repository.interface.js';
import type { OrderStatusLogDto } from './dtos/orderStatusLog.dto.js';
import type { CreateOrderStatusLogDto } from './dtos/createOrderStatusLog.dto.js';
import type { UpdateOrderStatusLogDto } from './dtos/updateOrderStatusLog.dto.js';
import OrderStatus from '../shared/enums/orderStatus.enum.js';

class OrderStatusLogRepository implements IRepository<
  OrderStatusLogDto,
  CreateOrderStatusLogDto,
  UpdateOrderStatusLogDto,
  number
> {
  async get(_id: number): Promise<OrderStatusLogDto | null> {
    return null;
  }

  async getAll(): Promise<OrderStatusLogDto[]> {
    return [];
  }

  async create(pMutable: CreateOrderStatusLogDto): Promise<OrderStatusLogDto> {
    return {
      id: 1,
      ...pMutable,
    };
  }

  async createMany(
    _pMutableList: CreateOrderStatusLogDto[],
  ): Promise<OrderStatusLogDto[]> {
    return [];
  }

  async update(pMutable: UpdateOrderStatusLogDto): Promise<OrderStatusLogDto> {
    return {
      id: pMutable.id,
      customerOrderId: 1,
      orderStatusId: OrderStatus.PENDING,
    };
  }

  async updateMany(
    _pMutableList: UpdateOrderStatusLogDto[],
  ): Promise<OrderStatusLogDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default OrderStatusLogRepository;
