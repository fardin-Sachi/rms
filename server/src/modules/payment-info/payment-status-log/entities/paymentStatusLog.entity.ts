import type PaymentStatus from '../../shared/enums/paymentStatus.enum.js';

export default class PaymentStatusLogEntity {
  constructor(
    public readonly id: number,
    public readonly paymentId: number,
    public paymentStatusId: PaymentStatus,
    public changedAt: Date,
  ) {}

  changePaymentStatus(paymentStatusId: PaymentStatus): void {
    this.paymentStatusId = paymentStatusId;
  }

  changeChangedAt(changedAt: Date): void {
    this.changedAt = changedAt;
  }
}
