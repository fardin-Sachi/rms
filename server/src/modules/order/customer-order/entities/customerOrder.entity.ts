import Big from 'big.js';

export default class CustomerOrderEntity {
  constructor(
    public readonly id: number,
    public customerId: number | null,
    public orderNumber: string,
    public employeeId: number,
    public subtotal: Big,
    public discount: Big | null,
    public vat: Big | null,
    public netTotal: Big,
    public orderTime: Date,
    public orderStatusId: number,
    public createdBy: number | null,
    public createdOn: Date | null,
    public updatedBy: number | null,
    public updatedOn: Date | null,
  ) {}

  changeCustomer(customerId: number | null): void {
    this.customerId = customerId;
  }

  changeEmployee(employeeId: number): void {
    this.employeeId = employeeId;
  }

  updateSubtotal(subtotal: Big): void {
    this.subtotal = subtotal;
  }

  updateDiscount(discount: Big | null): void {
    this.discount = discount;
  }

  updateVat(vat: Big | null): void {
    this.vat = vat;
  }

  updateNetTotal(netTotal: Big): void {
    this.netTotal = netTotal;
  }

  rescheduleOrder(orderTime: Date): void {
    this.orderTime = orderTime;
  }

  changeOrderStatus(orderStatusId: number): void {
    this.orderStatusId = orderStatusId;
  }

  updateAudit(updatedBy: number, updatedOn: Date): void {
    this.updatedBy = updatedBy;
    this.updatedOn = updatedOn;
  }
}
