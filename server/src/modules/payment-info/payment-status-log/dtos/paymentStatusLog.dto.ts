import type IDto from '../../../../shared/interfaces/dto.interface.js';

export interface PaymentStatusLogDto extends IDto<number> {
  paymentId: number;
  paymentStatusId: number;
  paymentStatusName?: string;
  changedAt?: Date;
}
