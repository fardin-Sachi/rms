import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type { CreatePaymentDto } from '../dtos/createPayment.dto.js';
import type { PaymentDto } from '../dtos/payment.dto.js';
import type { UpdatePaymentDto } from '../dtos/updatePayment.dto.js';
import PaymentEntity from '../entities/payment.entity.js';

export default class PaymentMapper implements IEntityMapper<
  PaymentEntity,
  PaymentDto,
  CreatePaymentDto,
  UpdatePaymentDto
> {
  toEntity(dto: PaymentDto): PaymentEntity {
    return new PaymentEntity(
      dto.id,
      dto.customerOrderId,
      dto.paymentTypeId,
      dto.transactionId,
      dto.amount,
      dto.currentPaymentStatusId,
      dto.paymentTime,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      dto.updatedBy ?? null,
      dto.updatedOn ?? null,
    );
  }

  fromCreateDto(dto: CreatePaymentDto): PaymentEntity {
    return new PaymentEntity(
      0,
      dto.customerOrderId,
      dto.paymentTypeId,
      dto.transactionId,
      dto.amount,
      dto.currentPaymentStatusId,
      dto.paymentTime ?? new Date(),
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      null,
      null,
    );
  }

  toDto(entity: PaymentEntity): PaymentDto {
    const dto: PaymentDto = {
      id: entity.id,
      customerOrderId: entity.customerOrderId,
      paymentTypeId: entity.paymentTypeId,
      transactionId: entity.transactionId,
      amount: entity.amount,
      currentPaymentStatusId: entity.currentPaymentStatusId,
      paymentTime: entity.paymentTime,
    };

    if (entity.createdBy !== null) dto.createdBy = entity.createdBy;

    if (entity.createdOn) dto.createdOn = entity.createdOn;

    if (entity.updatedBy !== null) dto.updatedBy = entity.updatedBy;

    if (entity.updatedOn) dto.updatedOn = entity.updatedOn;

    return dto;
  }

  updateEntity(entity: PaymentEntity, dto: UpdatePaymentDto): PaymentEntity {
    if (dto.paymentTypeId !== undefined) {
      entity.changePaymentType(dto.paymentTypeId);
    }

    if (dto.transactionId !== undefined) {
      entity.changeTransactionId(dto.transactionId);
    }

    if (dto.amount !== undefined) {
      entity.changeAmount(dto.amount);
    }

    if (dto.currentPaymentStatusId !== undefined) {
      entity.changePaymentStatus(dto.currentPaymentStatusId);
    }

    if (dto.paymentTime !== undefined) {
      entity.changePaymentTime(dto.paymentTime);
    }

    entity.updateAudit(dto.updatedBy, dto.updatedOn);

    return entity;
  }
}
