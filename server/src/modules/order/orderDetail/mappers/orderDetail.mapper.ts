import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type { CreateOrderDetailDto } from '../dtos/createOrderDetail.dto.js';
import type { OrderDetailDto } from '../dtos/orderDetail.dto.js';
import type { UpdateOrderDetailDto } from '../dtos/updateOrderDetail.dto.js';
import OrderDetailEntity from '../entities/orderDetail.entity.js';

export default class OrderDetailMapper implements IEntityMapper<
  OrderDetailEntity,
  OrderDetailDto,
  CreateOrderDetailDto,
  UpdateOrderDetailDto
> {
  toEntity(dto: OrderDetailDto): OrderDetailEntity {
    return new OrderDetailEntity(
      dto.id,
      dto.customerOrderId,
      dto.foodMenuId,
      dto.orderTypeId,
      dto.unitPrice,
      dto.quantity,
      dto.promotionId ?? null,
      dto.discountAmount ?? null,
      dto.lineTotal,
      dto.finalAmount,
      dto.activeStatus,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      dto.updatedBy ?? null,
      dto.updatedOn ?? null,
    );
  }

  fromCreateDto(dto: CreateOrderDetailDto): OrderDetailEntity {
    return new OrderDetailEntity(
      0,
      dto.customerOrderId,
      dto.foodMenuId,
      dto.orderTypeId,
      dto.unitPrice,
      dto.quantity,
      dto.promotionId ?? null,
      dto.discountAmount ?? null,
      dto.lineTotal,
      dto.finalAmount,
      dto.activeStatus ?? true,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      null,
      null,
    );
  }

  toDto(entity: OrderDetailEntity): OrderDetailDto {
    const dto: OrderDetailDto = {
      id: entity.id,
      customerOrderId: entity.customerOrderId,
      foodMenuId: entity.foodMenuId,
      orderTypeId: entity.orderTypeId,
      unitPrice: entity.unitPrice,
      quantity: entity.quantity,
      lineTotal: entity.lineTotal,
      finalAmount: entity.finalAmount,
      activeStatus: entity.activeStatus,
    };

    if (entity.promotionId !== null) {
      dto.promotionId = entity.promotionId;
    }

    if (entity.discountAmount !== null) {
      dto.discountAmount = entity.discountAmount;
    }

    if (entity.createdBy !== null) {
      dto.createdBy = entity.createdBy;
    }

    if (entity.createdOn) {
      dto.createdOn = entity.createdOn;
    }

    if (entity.updatedBy !== null) {
      dto.updatedBy = entity.updatedBy;
    }

    if (entity.updatedOn) {
      dto.updatedOn = entity.updatedOn;
    }

    return dto;
  }

  updateEntity(
    entity: OrderDetailEntity,
    dto: UpdateOrderDetailDto,
  ): OrderDetailEntity {
    if (dto.orderTypeId !== undefined) {
      entity.changeOrderType(dto.orderTypeId);
    }

    if (dto.unitPrice !== undefined) {
      entity.updateUnitPrice(dto.unitPrice);
    }

    if (dto.quantity !== undefined) {
      entity.updateQuantity(dto.quantity);
    }

    if (dto.promotionId !== undefined) {
      entity.applyPromotion(dto.promotionId ?? null);
    }

    if (dto.discountAmount !== undefined) {
      entity.updateDiscount(dto.discountAmount ?? null);
    }

    if (dto.finalAmount !== undefined) {
      entity.updateFinalAmount(dto.finalAmount);
    }

    if (dto.activeStatus !== undefined) {
      if (dto.activeStatus) {
        entity.activate();
      } else {
        entity.deactivate();
      }
    }

    if (dto.updatedBy !== undefined && dto.updatedOn !== undefined) {
      entity.updateAudit(dto.updatedBy, dto.updatedOn);
    }

    return entity;
  }
}
