import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import OrderStatusLogRepository from './orderStatusLog.repository.js';
import type { OrderStatusLogDto } from './dtos/orderStatusLog.dto.js';
import type { CreateOrderStatusLogDto } from './dtos/createOrderStatusLog.dto.js';
import type { UpdateOrderStatusLogDto } from './dtos/updateOrderStatusLog.dto.js';

class OrderStatusLogService {
  private readonly orderStatusLogRepository: OrderStatusLogRepository;

  constructor(private readonly logger: ILogger) {
    this.orderStatusLogRepository = new OrderStatusLogRepository();
  }

  async get(id: number): Promise<OrderStatusLogDto | null> {
    return this.orderStatusLogRepository.get(id);
  }

  async getAll(): Promise<OrderStatusLogDto[]> {
    return this.orderStatusLogRepository.getAll();
  }

  async create(pMutable: CreateOrderStatusLogDto): Promise<OrderStatusLogDto> {
    return this.orderStatusLogRepository.create(pMutable);
  }

  async createMany(
    pMutableList: CreateOrderStatusLogDto[],
  ): Promise<OrderStatusLogDto[]> {
    return this.orderStatusLogRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdateOrderStatusLogDto): Promise<OrderStatusLogDto> {
    return this.orderStatusLogRepository.update(pMutable);
  }

  async updateMany(
    pMutableList: UpdateOrderStatusLogDto[],
  ): Promise<OrderStatusLogDto[]> {
    return this.orderStatusLogRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.orderStatusLogRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.orderStatusLogRepository.deleteMany(ids);
  }
}

export default OrderStatusLogService;
