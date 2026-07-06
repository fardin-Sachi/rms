import type IDto from '../../../../shared/interfaces/dto.interface.js';
import Big from 'big.js';

export interface OrderDetailDto extends IDto<number> {
  customerOrderId: number;
  foodMenuId: number;
  orderTypeId: number;
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
