import {
  serial,
  integer,
  pgTable,
  timestamp,
  text,
  doublePrecision,
} from 'drizzle-orm/pg-core';
import { customerTable } from '../customer/customer.schema.js';
import { employeeTable } from '../employee/employee.schema.js';
import OrderStatus from '../../../../modules/order/shared/enums/orderStatus.enum.js';

type OrderStatusEnum = (typeof OrderStatus.values)[number];

export const customerOrderTable = pgTable('CUSTOMER_ORDER', {
  id: serial('ID').primaryKey(),

  customerId: integer('CUSTOMER_ID').references(() => customerTable.id),

  orderNumber: text('ORDER_NUMBER').unique().notNull(),

  employeeId: integer('EMPLOYEE_ID').references(() => employeeTable.id),

  orderTime: timestamp('ORDER_TIME'),

  subtotal: doublePrecision('SUBTOTAL'),

  discount: doublePrecision('DISCOUNT'),

  vat: doublePrecision('VAT'),

  netTotal: doublePrecision('NET_TOTAL'),

  orderStatusId: integer('ORDER_STATUS_ID').$type<OrderStatusEnum>(),

  createdBy: integer('CREATED_BY').references(() => employeeTable.id),

  createdOn: timestamp('CREATED_ON'),

  updatedBy: integer('UPDATED_BY').references(() => employeeTable.id),

  updatedOn: timestamp('UPDATED_ON'),
});
