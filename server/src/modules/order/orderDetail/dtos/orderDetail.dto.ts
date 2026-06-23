import type IDto from '../../../../shared/interfaces/dto.interface.js';
import Big from 'big.js';
import type OrderType from '../../shared/enums/orderType.enum.js';

export interface OrderDetailDto extends IDto<number> {
  customerOrderId: number;
  foodMenuId: number;
  orderTypeId: OrderType;
  unitPrice: Big;
  quantity: number;
  promotionId?: number;
  discountAmount?: Big;
  lineTotal: Big;
  finalAmount: Big;
  activeStatus: boolean;

  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedOn?: Date;
}
