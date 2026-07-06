import type { Database } from '../../../infrastructures/database/index.database.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type OrderTableAssignmentEntity from './entities/orderTableAssignment.entity.js';

class OrderTableAssignmentRepository {
  constructor(
    protected readonly db: Database,
    protected readonly logger: ILogger,
  ) {}

  async get(_key: {
    customerOrderId: number;
    restaurantTableId: number;
  }): Promise<OrderTableAssignmentEntity | null> {
    return null;
  }

  async getByOrderId(_orderId: number): Promise<OrderTableAssignmentEntity[]> {
    return [];
  }

  async create(
    entity: OrderTableAssignmentEntity,
  ): Promise<OrderTableAssignmentEntity> {
    return entity;
  }

  async delete(_key: {
    customerOrderId: number;
    restaurantTableId: number;
  }): Promise<void> {
    return;
  }

  async deleteByOrderId(_orderId: number): Promise<void> {
    return;
  }
}

export default OrderTableAssignmentRepository;
