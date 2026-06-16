import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import OrderTableAssignmentRepository from "./orderTableAssignment.repository.js";
import type {OrderTableAssignmentDto} from "./dtos/orderTableAssignment.dto.js";
import type {UpdateOrderTableAssignmentDto} from "./dtos/updateOrderTableAssignment.dto.js";
import type {CreateOrderTableAssignmentDto} from "./dtos/createOrderTableAssignment.dto.js";

class OrderTableAssignmentService {
  private readonly orderTableAssignmentRepository: OrderTableAssignmentRepository;

  constructor(private readonly logger: ILogger) {
    this.orderTableAssignmentRepository = new OrderTableAssignmentRepository();
  }

  async get(id: number): Promise<OrderTableAssignmentDto | null> {
    return this.orderTableAssignmentRepository.get(id);
  }

  async getByCustomerId(id: number): Promise<OrderTableAssignmentDto | null> {
    return this.orderTableAssignmentRepository.getByCustomerId(id);
  }

  async getByRestaurantTable(id: number): Promise<OrderTableAssignmentDto | null> {
    return this.orderTableAssignmentRepository.getByRestaurantTable(id);
  }

  async getAll(): Promise<OrderTableAssignmentDto[]> {
    return this.orderTableAssignmentRepository.getAll();
  }

  async create(pMutable: CreateOrderTableAssignmentDto): Promise<OrderTableAssignmentDto> {
    return this.orderTableAssignmentRepository.create(pMutable);
  }

  async createMany(pMutableList: CreateOrderTableAssignmentDto[]): Promise<OrderTableAssignmentDto[]> {
    return this.orderTableAssignmentRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdateOrderTableAssignmentDto): Promise<OrderTableAssignmentDto> {
    return this.orderTableAssignmentRepository.update(pMutable);
  }

  async updateMany(pMutableList: UpdateOrderTableAssignmentDto[]): Promise<OrderTableAssignmentDto[]> {
    return this.orderTableAssignmentRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.orderTableAssignmentRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.orderTableAssignmentRepository.deleteMany(ids);
  }
}

export default OrderTableAssignmentService;
