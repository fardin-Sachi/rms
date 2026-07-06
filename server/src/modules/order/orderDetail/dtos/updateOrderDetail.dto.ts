import type IDto from '../../../../shared/interfaces/dto.interface.js';
import Big from 'big.js';

export interface UpdateOrderDetailDto extends IDto<number> {
  orderTypeId?: number;
  unitPrice?: Big;
  quantity?: number;
  promotionId?: number;
  discountAmount?: Big;
  finalAmount?: Big;
  activeStatus?: boolean;

  updatedBy?: number;
  updatedOn?: Date;
}
