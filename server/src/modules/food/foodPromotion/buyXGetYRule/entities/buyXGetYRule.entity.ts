export default class BuyXGetYRuleEntity {
  constructor(
    public promotionId: number,
    public buyFoodId: number,
    public buyQuantity: number,
    public freeFoodId: number,
    public freeFoodQuantity: number,
  ) {}

  updatePromotionId(promotionId: number): void {
    this.promotionId = promotionId;
  }

  updateBuyFoodId(buyFoodId: number): void {
    this.buyFoodId = buyFoodId;
  }

  updateBuyQuantity(buyQuantity: number): void {
    this.buyQuantity = buyQuantity;
  }

  updateFreeFoodId(freeFoodId: number): void {
    this.freeFoodId = freeFoodId;
  }

  updateFreeFoodQuantity(freeFoodQuantity: number): void {
    this.freeFoodQuantity = freeFoodQuantity;
  }
}
