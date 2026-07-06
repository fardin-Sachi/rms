import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type { CreateOrderStatusLogDto } from '../dtos/createOrderStatusLog.dto.js';
import type { OrderStatusLogDto } from '../dtos/orderStatusLog.dto.js';
import type { UpdateOrderStatusLogDto } from '../dtos/updateOrderStatusLog.dto.js';
import OrderStatusLogEntity from '../entities/orderStatusLog.entity.js';

export default class OrderStatusLogMapper implements IEntityMapper<
  OrderStatusLogEntity,
  OrderStatusLogDto,
  CreateOrderStatusLogDto,
  UpdateOrderStatusLogDto
> {
  toEntity(dto: OrderStatusLogDto): OrderStatusLogEntity {
    return new OrderStatusLogEntity(
      dto.id,
      dto.customerOrderId,
      dto.orderStatusId,
      dto.note ?? null,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      dto.updatedBy ?? null,
      dto.updatedAt ?? null,
    );
  }

  fromCreateDto(dto: CreateOrderStatusLogDto): OrderStatusLogEntity {
    return new OrderStatusLogEntity(
      0,
      dto.customerOrderId,
      dto.orderStatusId,
      dto.note ?? null,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      null,
      null,
    );
  }

  toDto(entity: OrderStatusLogEntity): OrderStatusLogDto {
    const dto: OrderStatusLogDto = {
      id: entity.id,
      customerOrderId: entity.customerOrderId,
      orderStatusId: entity.orderStatusId,
    };

    if (entity.note !== null) dto.note = entity.note;

    if (entity.createdBy !== null) dto.createdBy = entity.createdBy;

    if (entity.createdOn) dto.createdOn = entity.createdOn;

    if (entity.updatedBy !== null) dto.updatedBy = entity.updatedBy;

    if (entity.updatedAt) dto.updatedAt = entity.updatedAt;

    return dto;
  }

  updateEntity(
    entity: OrderStatusLogEntity,
    dto: UpdateOrderStatusLogDto,
  ): OrderStatusLogEntity {
    if (dto.orderStatusId !== undefined) {
      entity.changeOrderStatus(dto.orderStatusId);
    }

    if (dto.note !== undefined) {
      entity.changeNote(dto.note ?? null);
    }

    if (dto.updatedBy !== undefined && dto.updatedAt !== undefined) {
      entity.updateAudit(dto.updatedBy, dto.updatedAt);
    }

    return entity;
  }
}
