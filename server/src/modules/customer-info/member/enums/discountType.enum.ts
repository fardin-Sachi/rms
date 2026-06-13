class DiscountType {
  static readonly NUMBER = 0;
  static readonly PERCENTAGE = 1;

  static readonly names = ['NUMBER', 'PERCENTAGE'] as const;

  static readonly values = [
    DiscountType.NUMBER,
    DiscountType.PERCENTAGE,
  ] as const;

  private static readonly roleMap: Record<string, number> = {
    NUMBER: DiscountType.NUMBER,
    PERCENTAGE: DiscountType.PERCENTAGE,
  };

  static getValue(role: string): number | undefined {
    return this.roleMap[role];
  }

  static getLabel(value: number): string | undefined {
    return Object.keys(this.roleMap).find((key) => this.roleMap[key] === value);
  }
}

export default DiscountType;
