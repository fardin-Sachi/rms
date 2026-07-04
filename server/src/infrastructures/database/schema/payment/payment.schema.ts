import {
  doublePrecision,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { customerOrderTable } from '../order/customerOrder.schema.js';
import { paymentTypeTable } from './paymentType.schema.js';
import { paymentStatusTable } from './paymentStatus.schema.js';
import { employeeTable } from '../employee/employee.schema.js';

export const paymentTable = pgTable('PAYMENT', {
  id: serial('ID').primaryKey(),

  customerOrderId: integer('CUSTOMER_ORDER_ID')
    .notNull()
    .references(() => customerOrderTable.id),

  paymentTypeId: integer('PAYMENT_TYPE_ID')
    .notNull()
    .references(() => paymentTypeTable.id),

  transactionId: text('TRANSACTION_ID').unique(),

  amount: doublePrecision('AMOUNT').notNull(),

  currentPaymentStatusId: integer('CURRENT_PAYMENT_STATUS_ID')
    .notNull()
    .references(() => paymentStatusTable.id),

  paymentTime: timestamp('PAYMENT_TIME'),

  createdBy: integer('CREATED_BY').references(() => employeeTable.id),

  createdOn: timestamp('CREATED_ON'),

  updatedBy: integer('UPDATED_BY').references(() => employeeTable.id),

  updatedOn: timestamp('UPDATED_ON'),
});
