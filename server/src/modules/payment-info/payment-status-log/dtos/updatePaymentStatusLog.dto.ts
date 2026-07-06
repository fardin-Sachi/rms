import type IDto from '../../../../shared/interfaces/dto.interface.js';

export interface UpdatePaymentStatusLogDto extends IDto<number> {
  changedAt?: Date;
}
