export default class DiscountRuleEntity {
  constructor(
    public readonly id: number,
    public promotionId: number,
    public discountTypeId: number,
    public discountValue: number,
  ) {}

  changeDiscountType(discountTypeId: number): void {
    this.discountTypeId = discountTypeId;
  }

  changeDiscountValue(discountValue: number): void {
    this.discountValue = discountValue;
  }
}
