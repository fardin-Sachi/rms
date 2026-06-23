import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const promotionTypeTable = pgTable('PROMOTION_TYPE', {
  id: serial('ID').primaryKey(),

  name: text('NAME').notNull().unique(),
});
