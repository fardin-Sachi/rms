import Big from 'big.js';
import type PaymentStatus from '../../shared/enums/paymentStatus.enum.js';
import type PaymentType from '../../shared/enums/paymentType.enum.js';

export default class PaymentEntity {
  constructor(
    public readonly id: number,
    public customerOrderId: number,
    public paymentTypeId: PaymentType,
    public transactionId: string | null,
    public amount: Big,
    public currentPaymentStatusId: PaymentStatus,
    public paymentTime: Date,
    public createdBy: number | null,
    public createdOn: Date | null,
    public updatedBy: number | null,
    public updatedOn: Date | null,
  ) {}

  changePaymentType(paymentTypeId: PaymentType): void {
    this.paymentTypeId = paymentTypeId;
  }

  changeTransactionId(transactionId: string | null): void {
    this.transactionId = transactionId;
  }

  changeAmount(amount: Big): void {
    this.amount = amount;
  }

  changePaymentStatus(status: PaymentStatus): void {
    this.currentPaymentStatusId = status;
  }

  changePaymentTime(paymentTime: Date): void {
    this.paymentTime = paymentTime;
  }

  updateAudit(updatedBy?: number, updatedOn?: Date): void {
    if (updatedBy !== undefined) {
      this.updatedBy = updatedBy;
    }

    if (updatedOn !== undefined) {
      this.updatedOn = updatedOn;
    }
  }
}
