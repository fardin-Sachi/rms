import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import { paymentTable } from './payment.schema.js';
import { paymentStatusTable } from './paymentStatus.schema.js';
import { employeeTable } from '../employee/employee.schema.js';

export const paymentStatusLogTable = pgTable('PAYMENT_STATUS_LOG', {
  id: serial('ID').primaryKey(),

  paymentId: integer('PAYMENT_ID')
    .notNull()
    .references(() => paymentTable.id),

  paymentStatusId: integer('PAYMENT_STATUS_ID')
    .notNull()
    .references(() => paymentStatusTable.id),

  updatedBy: integer('UPDATED_BY').references(() => employeeTable.id),

  updatedOn: timestamp('UPDATED_ON'),
});
