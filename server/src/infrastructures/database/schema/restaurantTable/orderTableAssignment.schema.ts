import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core';
import { customerOrderTable } from '../order/customerOrder.schema.js';
import { restaurantTableTable } from './restaurantTable.schema.js';

export const orderTableAssignmentTable = pgTable(
  'ORDER_TABLE_ASSIGNMENT',
  {
    customerOrderId: integer('CUSTOMER_ORDER_ID')
      .notNull()
      .references(() => customerOrderTable.id),

    restaurantTableId: integer('RESTAURANT_TABLE_ID')
      .notNull()
      .references(() => restaurantTableTable.id),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.customerOrderId, table.restaurantTableId],
    }),
  }),
);
