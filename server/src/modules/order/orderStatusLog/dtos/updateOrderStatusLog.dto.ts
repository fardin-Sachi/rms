import type IDto from '../../../../shared/interfaces/dto.interface.js';
import OrderStatus from '../../shared/enums/orderStatus.enum.js';

export interface UpdateOrderStatusLogDto extends IDto<number> {
  customerOrderId: number;
  orderStatusId?: OrderStatus;
  note?: string;

  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedAt?: Date;
}
