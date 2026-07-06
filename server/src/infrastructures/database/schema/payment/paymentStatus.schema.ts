import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const paymentStatusTable = pgTable('PAYMENT_STATUS', {
  id: serial('ID').primaryKey(),

  name: text('NAME').notNull(),
});
