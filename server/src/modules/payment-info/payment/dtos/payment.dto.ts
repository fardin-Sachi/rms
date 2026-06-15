import type IDto from "../../../../shared/interfaces/dto.interface.js";
import type PaymentType from "../../shared/enums/paymentType.enum.js";
import type PaymentStatus from "../../shared/enums/paymentStatus.enum.js";
import Big from "big.js";

export interface PaymentDto extends IDto<number> {
  customerOrderId: number;
  paymentTypeId: PaymentType;
  paymentTypeName?: string;
  transactionId: string | null;
  amount: Big;
  currentPaymentStatusId: PaymentStatus;
  paymentStatusName?: string;
  paymentTime: Date;

  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedOn?: Date;
}
