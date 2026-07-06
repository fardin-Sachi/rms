import type IDto from '../../../../shared/interfaces/dto.interface.js';

export interface CreatePaymentStatusLogDto extends IDto<number> {
  paymentId: number;
  paymentStatusId: number;
  changedAt?: Date;
}
