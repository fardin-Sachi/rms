import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const orderTypeTable = pgTable('ORDER_TYPE', {
  id: serial('ID').primaryKey(),

  name: text('NAME').notNull().unique(),
});
