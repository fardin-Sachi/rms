import type IDto from '../../../../shared/interfaces/dto.interface.js';
export interface UpdateOrderStatusLogDto extends IDto<number> {
  customerOrderId: number;
  orderStatusId?: number;
  note?: string;

  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedAt?: Date;
}
