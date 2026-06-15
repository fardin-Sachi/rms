import type IDto from "../../../../shared/interfaces/dto.interface.js";
import Big from "big.js";
import type OrderType from "../../shared/enums/orderType.enum.js";

export interface UpdateOrderDetailDto extends IDto<number> {
  orderTypeId?: OrderType;
  unitPrice?: Big;
  quantity?: number;
  promotionId?: number;
  discountAmount?: Big;
  finalAmount?: Big;
  activeStatus?: boolean;

  updatedBy?: number;
  updatedOn?: Date;
}