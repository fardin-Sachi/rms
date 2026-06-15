import type IDto from "../../../../shared/interfaces/dto.interface.js";
import type PaymentType from "../../shared/enums/paymentType.enum.js";
import type PaymentStatus from "../../shared/enums/paymentStatus.enum.js";
import Big from "big.js";

export interface UpdatePaymentDto extends IDto<number> {
  paymentTypeId?: PaymentType;
  transactionId?: string | null;
  amount?: Big;
  currentPaymentStatusId?: PaymentStatus;
  paymentTime?: Date;

  updatedBy?: number;
  updatedOn?: Date;
}
