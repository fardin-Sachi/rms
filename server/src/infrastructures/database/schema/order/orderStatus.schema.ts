import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const orderStatusTable = pgTable('ORDER_STATUS', {
  id: serial('ID').primaryKey(),

  name: text('NAME').notNull().unique(),
});
