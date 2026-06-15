class OrderStatus {
  static readonly PENDING = 0;
  static readonly CONFIRMED = 1;
  static readonly PREPARING = 2;
  static readonly READY = 3;
  static readonly SERVED = 4;
  static readonly COMPLETED = 5;
  static readonly CANCELLED = 6;
  static readonly REFUNDED = 7;

  static readonly names = ['PENDING', 'CONFIRMED','PREPARING', 'READY','SERVED', 'COMPLETED','CANCELLED', 'REFUNDED'] as const;

  static readonly values = [
    OrderStatus.PENDING,
    OrderStatus.CONFIRMED,
    OrderStatus.PREPARING,
    OrderStatus.READY,
    OrderStatus.SERVED,
    OrderStatus.COMPLETED,
    OrderStatus.CANCELLED,
    OrderStatus.REFUNDED,
  ] as const;

  private static readonly roleMap: Record<string, number> = {
    PENDING: OrderStatus.PENDING,
    CONFIRMED: OrderStatus.CONFIRMED,
    PREPARING: OrderStatus.PREPARING,
    READY: OrderStatus.READY,
    SERVED: OrderStatus.SERVED,
    COMPLETED: OrderStatus.COMPLETED,
    PERCENTAGE: OrderStatus.CONFIRMED,
    CANCELLED: OrderStatus.CANCELLED,
    REFUNDED: OrderStatus.REFUNDED,
  };

  static getValue(role: string): number | undefined {
    return this.roleMap[role];
  }

  static getLabel(value: number): string | undefined {
    return Object.keys(this.roleMap).find((key) => this.roleMap[key] === value);
  }
}

export default OrderStatus;
