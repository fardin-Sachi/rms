import type PaymentType from '../../shared/enums/paymentType.enum.js';
import type PaymentStatus from '../../shared/enums/paymentStatus.enum.js';
import Big from 'big.js';

export interface CreatePaymentDto {
  customerOrderId: number;
  paymentTypeId: PaymentType;
  transactionId: string | null;
  amount: Big;
  currentPaymentStatusId: PaymentStatus;
  paymentTime?: Date;

  createdBy?: number;
  createdOn?: Date;
}
