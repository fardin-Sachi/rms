export default class OrderTableAssignmentEntity {
  constructor(
    public customerOrderId: number,
    public restaurantTableId: number,
  ) {}

  changeTable(tableId: number): void {
    this.restaurantTableId = tableId;
  }

  changeOrder(orderId: number): void {
    this.customerOrderId = orderId;
  }
}
