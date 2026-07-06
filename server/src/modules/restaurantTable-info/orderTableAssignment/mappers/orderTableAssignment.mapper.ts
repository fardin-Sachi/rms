import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type { CreateOrderTableAssignmentDto } from '../dtos/createOrderTableAssignment.dto.js';
import type { OrderTableAssignmentDto } from '../dtos/orderTableAssignment.dto.js';
import type { UpdateOrderTableAssignmentDto } from '../dtos/updateOrderTableAssignment.dto.js';
import OrderTableAssignmentEntity from '../entities/orderTableAssignment.entity.js';

export default class OrderTableAssignmentMapper implements IEntityMapper<
  OrderTableAssignmentEntity,
  OrderTableAssignmentDto,
  CreateOrderTableAssignmentDto,
  UpdateOrderTableAssignmentDto
> {
  toEntity(dto: OrderTableAssignmentDto): OrderTableAssignmentEntity {
    return new OrderTableAssignmentEntity(
      dto.customerOrderId,
      dto.restaurantTableId,
    );
  }

  fromCreateDto(
    dto: CreateOrderTableAssignmentDto,
  ): OrderTableAssignmentEntity {
    return new OrderTableAssignmentEntity(
      dto.customerOrderId,
      dto.restaurantTableId,
    );
  }

  toDto(entity: OrderTableAssignmentEntity): OrderTableAssignmentDto {
    return {
      customerOrderId: entity.customerOrderId,
      restaurantTableId: entity.restaurantTableId,
    };
  }

  updateEntity(
    entity: OrderTableAssignmentEntity,
    dto: UpdateOrderTableAssignmentDto,
  ): OrderTableAssignmentEntity {
    if (dto.customerOrderId !== undefined) {
      entity.changeOrder(dto.customerOrderId);
    }

    if (dto.restaurantTableId !== undefined) {
      entity.changeTable(dto.restaurantTableId);
    }

    return entity;
  }
}
