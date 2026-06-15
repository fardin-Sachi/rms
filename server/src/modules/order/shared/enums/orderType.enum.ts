class OrderType {
  static readonly DINE_IN = 0;
  static readonly TAKE_AWAY = 1;
  static readonly DELIVERY = 2;

  static readonly names = ['DINE_IN', 'TAKE_AWAY','DELIVERY'] as const;

  static readonly values = [
    OrderType.DINE_IN,
    OrderType.TAKE_AWAY,
    OrderType.DELIVERY,
  ] as const;

  private static readonly roleMap: Record<string, number> = {
    DINE_IN: OrderType.DINE_IN,
    TAKE_AWAY: OrderType.TAKE_AWAY,
    DELIVERY: OrderType.DELIVERY,
  };

  static getValue(role: string): number | undefined {
    return this.roleMap[role];
  }

  static getLabel(value: number): string | undefined {
    return Object.keys(this.roleMap).find((key) => this.roleMap[key] === value);
  }
}

export default OrderType;
