import Big from "big.js";
import type OrderType from "../../shared/enums/orderType.enum.js";

export interface CreateOrderDetailDto{
  customerOrderId: number;
  foodMenuId: number;
  orderTypeId: OrderType;
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