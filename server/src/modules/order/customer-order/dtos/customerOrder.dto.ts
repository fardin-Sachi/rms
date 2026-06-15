import type IDto from '../../../../shared/interfaces/dto.interface.js';
import Big from "big.js";

export interface CustomerOrderDto extends IDto<number> {
  customerId?: number;
  orderNumber: string;
  employeeId: number;

  subtotal: Big;
  discount?: Big;
  vat?: Big; // VAT in numeric amount
  netTotal: Big;

  orderTime: Date;
  orderStatusId: number;

  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedOn?: Date;
}