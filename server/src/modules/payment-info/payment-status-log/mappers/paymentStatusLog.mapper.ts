import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type { CreatePaymentStatusLogDto } from '../dtos/createPaymentStatusLog.dto.js';
import type { PaymentStatusLogDto } from '../dtos/paymentStatusLog.dto.js';
import type { UpdatePaymentStatusLogDto } from '../dtos/updatePaymentStatusLog.dto.js';
import PaymentStatusLogEntity from '../entities/paymentStatusLog.entity.js';

export default class PaymentStatusLogMapper implements IEntityMapper<
  PaymentStatusLogEntity,
  PaymentStatusLogDto,
  CreatePaymentStatusLogDto,
  UpdatePaymentStatusLogDto
> {
  toEntity(dto: PaymentStatusLogDto): PaymentStatusLogEntity {
    return new PaymentStatusLogEntity(
      dto.id,
      dto.paymentId,
      dto.paymentStatusId,
      dto.changedAt ?? new Date(),
    );
  }

  fromCreateDto(dto: CreatePaymentStatusLogDto): PaymentStatusLogEntity {
    return new PaymentStatusLogEntity(
      dto.id,
      dto.paymentId,
      dto.paymentStatusId,
      dto.changedAt ?? new Date(),
    );
  }

  toDto(entity: PaymentStatusLogEntity): PaymentStatusLogDto {
    const dto: PaymentStatusLogDto = {
      id: entity.id,
      paymentId: entity.paymentId,
      paymentStatusId: Number(entity.paymentStatusId),
    };

    if (entity.changedAt) {
      dto.changedAt = entity.changedAt;
    }

    return dto;
  }

  updateEntity(
    entity: PaymentStatusLogEntity,
    dto: UpdatePaymentStatusLogDto,
  ): PaymentStatusLogEntity {
    if (dto.changedAt !== undefined) {
      entity.changeChangedAt(dto.changedAt);
    }

    return entity;
  }
}
