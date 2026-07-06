import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type { CreateCustomerOrderDto } from '../dtos/createCustomerOrder.dto.js';
import type { CustomerOrderDto } from '../dtos/customerOrder.dto.js';
import type { UpdateCustomerOrderDto } from '../dtos/updateCustomerOrder.dto.js';
import CustomerOrderEntity from '../entities/customerOrder.entity.js';

export default class CustomerOrderMapper implements IEntityMapper<
  CustomerOrderEntity,
  CustomerOrderDto,
  CreateCustomerOrderDto,
  UpdateCustomerOrderDto
> {
  toEntity(dto: CustomerOrderDto): CustomerOrderEntity {
    return new CustomerOrderEntity(
      dto.id,
      dto.customerId ?? null,
      dto.orderNumber,
      dto.employeeId,
      dto.subtotal,
      dto.discount ?? null,
      dto.vat ?? null,
      dto.netTotal,
      dto.orderTime,
      dto.orderStatusId,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      dto.updatedBy ?? null,
      dto.updatedOn ?? null,
    );
  }

  fromCreateDto(dto: CreateCustomerOrderDto): CustomerOrderEntity {
    return new CustomerOrderEntity(
      0,
      dto.customerId ?? null,
      dto.orderNumber ?? '',
      dto.employeeId,
      dto.subtotal,
      dto.discount ?? null,
      dto.vat ?? null,
      dto.netTotal,
      dto.orderTime,
      dto.orderStatusId,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      null,
      null,
    );
  }

  toDto(entity: CustomerOrderEntity): CustomerOrderDto {
    const dto: CustomerOrderDto = {
      id: entity.id,
      orderNumber: entity.orderNumber,
      employeeId: entity.employeeId,
      subtotal: entity.subtotal,
      netTotal: entity.netTotal,
      orderTime: entity.orderTime,
      orderStatusId: entity.orderStatusId,
    };

    if (entity.customerId !== null) dto.customerId = entity.customerId;

    if (entity.discount !== null) dto.discount = entity.discount;

    if (entity.vat !== null) dto.vat = entity.vat;

    if (entity.createdBy !== null) dto.createdBy = entity.createdBy;

    if (entity.createdOn) dto.createdOn = entity.createdOn;

    if (entity.updatedBy !== null) dto.updatedBy = entity.updatedBy;

    if (entity.updatedOn) dto.updatedOn = entity.updatedOn;

    return dto;
  }

  updateEntity(
    entity: CustomerOrderEntity,
    dto: UpdateCustomerOrderDto,
  ): CustomerOrderEntity {
    if (dto.customerId !== undefined) {
      entity.changeCustomer(dto.customerId ?? null);
    }

    if (dto.employeeId !== undefined) {
      entity.changeEmployee(dto.employeeId);
    }

    if (dto.subtotal !== undefined) {
      entity.updateSubtotal(dto.subtotal);
    }

    if (dto.discount !== undefined) {
      entity.updateDiscount(dto.discount ?? null);
    }

    if (dto.vat !== undefined) {
      entity.updateVat(dto.vat ?? null);
    }

    if (dto.netTotal !== undefined) {
      entity.updateNetTotal(dto.netTotal);
    }

    if (dto.orderTime !== undefined) {
      entity.rescheduleOrder(dto.orderTime);
    }

    if (dto.orderStatusId !== undefined) {
      entity.changeOrderStatus(dto.orderStatusId);
    }

    if (dto.updatedBy !== undefined && dto.updatedOn !== undefined) {
      entity.updateAudit(dto.updatedBy, dto.updatedOn);
    }

    return entity;
  }
}
