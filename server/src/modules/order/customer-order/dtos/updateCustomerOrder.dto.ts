import Big from "big.js";
import type IDto from "../../../../shared/interfaces/dto.interface.js";

export interface UpdateCustomerOrderDto extends IDto {
  customerId?: number;
  // orderNumber: string;
  employeeId?: number;

  subtotal?: Big;
  discount?: Big;
  vat?: Big; // VAT in numeric amount
  netTotal?: Big;

  orderTime?: Date; // Employee might need to create order for the future
  orderStatusId?: number;

  updatedBy?: number;
  updatedOn?: Date;
}
