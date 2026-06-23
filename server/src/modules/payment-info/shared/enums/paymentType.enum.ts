class PaymentType {
  static readonly CASH = 0;
  static readonly MOBILE_BANKING = 1;
  static readonly FAILED = 2;
  static readonly ONLINE = 3;

  static readonly names = [
    'CASH',
    'MOBILE_BANKING',
    'FAILED',
    'ONLINE',
  ] as const;

  static readonly values = [
    PaymentType.CASH,
    PaymentType.MOBILE_BANKING,
    PaymentType.FAILED,
    PaymentType.ONLINE,
  ] as const;

  private static readonly roleMap: Record<string, number> = {
    CASH: PaymentType.CASH,
    MOBILE_BANKING: PaymentType.MOBILE_BANKING,
    FAILED: PaymentType.FAILED,
    ONLINE: PaymentType.ONLINE,
  };

  static getValue(role: string): number | undefined {
    return this.roleMap[role];
  }

  static getLabel(value: number): string | undefined {
    return Object.keys(this.roleMap).find((key) => this.roleMap[key] === value);
  }
}

export default PaymentType;
