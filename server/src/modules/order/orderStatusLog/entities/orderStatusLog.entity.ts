export default class OrderStatusLogEntity {
  constructor(
    public readonly id: number,
    public customerOrderId: number,
    public orderStatusId: number,
    public note: string | null,
    public createdBy: number | null,
    public createdOn: Date | null,
    public updatedBy: number | null,
    public updatedAt: Date | null,
  ) {}

  changeOrderStatus(orderStatusId: number): void {
    this.orderStatusId = orderStatusId;
  }

  changeNote(note: string | null): void {
    this.note = note;
  }

  updateAudit(updatedBy: number, updatedAt: Date): void {
    this.updatedBy = updatedBy;
    this.updatedAt = updatedAt;
  }
}
