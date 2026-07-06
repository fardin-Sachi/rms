export interface CreateOrderStatusLogDto {
  customerOrderId: number;
  orderStatusId: number;
  note?: string;

  createdBy?: number;
  createdOn?: Date;
}
