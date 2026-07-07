import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import OrderTableAssignmentRepository from './orderTableAssignment.repository.js';
import type OrderTableAssignmentMapper from './mappers/orderTableAssignment.mapper.js';
import type { OrderTableAssignmentDto } from './dtos/orderTableAssignment.dto.js';
import type { CreateOrderTableAssignmentDto } from './dtos/createOrderTableAssignment.dto.js';
import type { UpdateOrderTableAssignmentDto } from './dtos/updateOrderTableAssignment.dto.js';
import type { ICache } from '../../../infrastructures/cache/cache.interface.js';

class OrderTableAssignmentService {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mCache: ICache,
    private readonly mRepository: OrderTableAssignmentRepository,
    private readonly mMapper: OrderTableAssignmentMapper,
  ) {}

  async assign(dto: CreateOrderTableAssignmentDto): Promise<void> {
    const entity = this.mMapper.fromCreateDto(dto);
    await this.mRepository.create(entity);
  }

  async getByOrderId(orderId: number): Promise<OrderTableAssignmentDto[]> {
    const entities = await this.mRepository.getByOrderId(orderId);

    return entities.map((e) => this.mMapper.toDto(e));
  }

  async remove(dto: OrderTableAssignmentDto): Promise<void> {
    await this.mRepository.delete({
      customerOrderId: dto.customerOrderId,
      restaurantTableId: dto.restaurantTableId,
    });
  }

  async update(dto: UpdateOrderTableAssignmentDto): Promise<void> {
    const entity = await this.mRepository.get({
      customerOrderId: dto.customerOrderId!,
      restaurantTableId: dto.restaurantTableId!,
    });

    if (!entity) throw new Error('Assignment not found');

    this.mMapper.updateEntity(entity, dto);

    await this.mRepository.create(entity); // upsert-style behavior
  }

  async replace(dto: CreateOrderTableAssignmentDto): Promise<void> {
    await this.mRepository.deleteByOrderId(dto.customerOrderId);

    const entity = this.mMapper.fromCreateDto(dto);

    await this.mRepository.create(entity);
  }
}

export default OrderTableAssignmentService;
