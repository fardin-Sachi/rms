class PromotionType {
  static readonly PERCENTAGE_DISCOUNT = 0;
  static readonly FIXED_DISCOUNT = 1;
  static readonly BUY_X_GET_Y = 2;

  static readonly names = [
    'PERCENTAGE_DISCOUNT',
    'FIXED_DISCOUNT',
    'BUY_X_GET_Y',
  ] as const;

  static readonly values = [
    PromotionType.PERCENTAGE_DISCOUNT,
    PromotionType.FIXED_DISCOUNT,
    PromotionType.BUY_X_GET_Y,
  ] as const;

  private static readonly roleMap: Record<string, number> = {
    PERCENTAGE_DISCOUNT: PromotionType.PERCENTAGE_DISCOUNT,
    FIXED_DISCOUNT: PromotionType.FIXED_DISCOUNT,
    BUY_X_GET_Y: PromotionType.BUY_X_GET_Y,
  };

  static getValue(role: string): number | undefined {
    return this.roleMap[role];
  }

  static getLabel(value: number): string | undefined {
    return Object.keys(this.roleMap).find((key) => this.roleMap[key] === value);
  }
}

export default PromotionType;
