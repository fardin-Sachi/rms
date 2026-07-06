import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const paymentTypeTable = pgTable('PAYMENT_TYPE', {
  id: serial('ID').primaryKey(),

  name: text('NAME').notNull(),
});
