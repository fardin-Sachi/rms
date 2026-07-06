import type IDto from '../../../../shared/interfaces/dto.interface.js';

export interface OrderStatusLogDto extends IDto<number> {
  customerOrderId: number;
  orderStatusId: number;
  note?: string;

  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedAt?: Date;
}
