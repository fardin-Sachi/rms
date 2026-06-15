import type IDto from "../../../../shared/interfaces/dto.interface.js";
import type PaymentStatus from "../../shared/enums/paymentStatus.enum.js";

export interface CreatePaymentStatusLogDto extends IDto<number> {
  paymentId: number;
  paymentStatusId: PaymentStatus;
  changedAt?: Date;
}
