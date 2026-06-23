import type OrderStatus from '../../shared/enums/orderStatus.enum.js';

export interface CreateOrderStatusLogDto {
  customerOrderId: number;
  orderStatusId: OrderStatus;
  note?: string;

  createdBy?: number;
  createdOn?: Date;
}
