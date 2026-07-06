import Big from 'big.js';

export default class OrderDetailEntity {
  constructor(
    public readonly id: number,
    public customerOrderId: number,
    public foodMenuId: number,
    public orderTypeId: number,
    public unitPrice: Big,
    public quantity: number,
    public promotionId: number | null,
    public discountAmount: Big | null,
    public lineTotal: Big,
    public finalAmount: Big,
    public activeStatus: boolean,
    public createdBy: number | null,
    public createdOn: Date | null,
    public updatedBy: number | null,
    public updatedOn: Date | null,
  ) {}

  changeOrderType(orderTypeId: number): void {
    this.orderTypeId = orderTypeId;
  }

  updateUnitPrice(unitPrice: Big): void {
    this.unitPrice = unitPrice;
  }

  updateQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  applyPromotion(promotionId: number | null): void {
    this.promotionId = promotionId;
  }

  updateDiscount(discountAmount: Big | null): void {
    this.discountAmount = discountAmount;
  }

  updateFinalAmount(finalAmount: Big): void {
    this.finalAmount = finalAmount;
  }

  activate(): void {
    this.activeStatus = true;
  }

  deactivate(): void {
    this.activeStatus = false;
  }

  updateAudit(updatedBy: number, updatedOn: Date): void {
    this.updatedBy = updatedBy;
    this.updatedOn = updatedOn;
  }
}
