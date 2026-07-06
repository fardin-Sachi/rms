import { boolean, integer, pgTable, serial } from 'drizzle-orm/pg-core';

export const restaurantTableTable = pgTable('RESTAURANT_TABLE', {
  id: serial('ID').primaryKey(),

  capacity: integer('CAPACITY').notNull(),

  tableNo: integer('TABLE_NO').notNull().unique(),

  activeStatus: boolean('ACTIVE_STATUS').default(true).notNull(),
});
