export interface CreateCustomerOrderDto {
  customerId?: number;
  orderNumber?: string; // To be filled up in the service layer
  employeeId: number;

  subtotal: Big;
  discount?: Big;
  vat?: Big; // VAT in numeric amount
  netTotal: Big;

  orderTime: Date;
  orderStatusId: number; // Status = "Order taken" as default

  createdBy?: number;
  createdOn?: Date;
}