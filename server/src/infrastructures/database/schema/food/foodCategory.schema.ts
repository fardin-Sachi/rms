import { boolean, pgTable, serial, text } from 'drizzle-orm/pg-core';

export const foodCategoryTable = pgTable('FOOD_CATEGORY', {
  id: serial('ID').primaryKey(),

  name: text('NAME').notNull(),

  activeStatus: boolean('ACTIVE_STATUS').default(true).notNull(),
});
