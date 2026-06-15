import type IDto from "../../../../shared/interfaces/dto.interface.js";
import type OrderStatus from "../../shared/enums/orderStatus.enum.js";

export interface OrderStatusLogDto extends IDto<number> {
  customerOrderId: number;
  orderStatusId: OrderStatus;
  note?: string;

  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedAt?: Date;
}