import Big from 'big.js';

export interface CreateOrderDetailDto {
  customerOrderId: number;
  foodMenuId: number;
  orderTypeId: number;
  unitPrice: Big;
  quantity: number;
  promotionId?: number;
  discountAmount?: Big;
  lineTotal: Big;
  finalAmount: Big;
  activeStatus?: boolean;

  createdBy?: number;
  createdOn?: Date;
}
