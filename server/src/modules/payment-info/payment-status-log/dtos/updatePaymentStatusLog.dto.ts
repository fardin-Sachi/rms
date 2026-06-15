import type IDto from "../../../../shared/interfaces/dto.interface.js";
import type PaymentStatus from "../../shared/enums/paymentStatus.enum.js";

export interface UpdatePaymentStatusLogDto extends IDto<number> {
  changedAt?: Date;
}
