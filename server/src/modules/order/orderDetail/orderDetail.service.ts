import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import OrderDetailRepository from "./orderDetail.repository.js";
import type {OrderDetailDto} from "./dtos/orderDetail.dto.js";
import type {CreateOrderDetailDto} from "./dtos/createOrderDetail.dto.js";
import type {UpdateOrderDetailDto} from "./dtos/updateOrderDetail.dto.js";

class OrderDetailService {
  private readonly orderDetailRepository: OrderDetailRepository;

  constructor(private readonly logger: ILogger) {
    this.orderDetailRepository = new OrderDetailRepository();
  }

  async get(id: number): Promise<OrderDetailDto | null> {
    return this.orderDetailRepository.get(id);
  }

  async getAll(): Promise<OrderDetailDto[]> {
    return this.orderDetailRepository.getAll();
  }

  async create(pMutable: CreateOrderDetailDto): Promise<OrderDetailDto> {
    return this.orderDetailRepository.create(pMutable);
  }

  async createMany(pMutableList: CreateOrderDetailDto[]): Promise<OrderDetailDto[]> {
    return this.orderDetailRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdateOrderDetailDto): Promise<OrderDetailDto> {
    return this.orderDetailRepository.update(pMutable);
  }

  async updateMany(pMutableList: UpdateOrderDetailDto[]): Promise<OrderDetailDto[]> {
    return this.orderDetailRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.orderDetailRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.orderDetailRepository.deleteMany(ids);
  }
}

export default OrderDetailService;
