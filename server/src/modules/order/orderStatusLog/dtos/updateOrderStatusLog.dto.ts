import Big from "big.js";
import type PaymentType from "../../../payment-info/shared/enums/paymentType.enum.js";
import type PaymentStatus from "../../../payment-info/shared/enums/paymentStatus.enum.js";
import type IDto from "../../../../shared/interfaces/dto.interface.js";

export interface UpdatePaymentDto extends IDto<number> {
  paymentTypeId?: PaymentType;
  transactionId?: string | null;
  amount?: Big;
  currentPaymentStatusId?: PaymentStatus;
  paymentStatusName?: string;
  paymentTime?: Date;

  updatedBy?: number;
  updatedOn?: Date;
}
