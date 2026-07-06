class PaymentStatus {
  static readonly PENDING = 0;
  static readonly COMPLETED = 1;
  static readonly FAILED = 2;
  static readonly CANCELLED = 3;
  static readonly REFUNDED = 4;

  static readonly names = [
    'PENDING',
    'COMPLETED',
    'FAILED',
    'CANCELLED',
    'REFUNDED',
  ] as const;

  static readonly values = [
    PaymentStatus.PENDING,
    PaymentStatus.COMPLETED,
    PaymentStatus.FAILED,
    PaymentStatus.CANCELLED,
    PaymentStatus.REFUNDED,
  ] as const;

  private static readonly roleMap: Record<string, number> = {
    PENDING: PaymentStatus.PENDING,
    COMPLETED: PaymentStatus.COMPLETED,
    FAILED: PaymentStatus.FAILED,
    CANCELLED: PaymentStatus.CANCELLED,
    REFUNDED: PaymentStatus.REFUNDED,
  };

  static getValue(role: string): number | undefined {
    return this.roleMap[role];
  }

  static getLabel(value: number): string | undefined {
    return Object.keys(this.roleMap).find((key) => this.roleMap[key] === value);
  }
}

export default PaymentStatus;
