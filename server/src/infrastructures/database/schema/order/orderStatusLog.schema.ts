import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { customerOrderTable } from './customerOrder.schema.js';
import { employeeTable } from '../employee/employee.schema.js';
import { orderStatusTable } from './orderStatus.schema.js';

export const orderStatusLogTable = pgTable('ORDER_STATUS_LOG', {
  id: serial('ID').primaryKey(),

  customerOrderId: integer('CUSTOMER_ORDER_ID')
    .notNull()
    .references(() => customerOrderTable.id),

  orderStatusId: integer('ORDER_STATUS_ID')
    .notNull()
    .references(() => orderStatusTable.id),

  updatedBy: integer('UPDATED_BY').references(() => employeeTable.id),

  updatedOn: timestamp('UPDATED_ON'),

  note: varchar('NOTE', {
    length: 500,
  }),
});
