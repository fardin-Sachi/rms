import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core';
import { foodMenuTable } from './foodMenu.schema.js';
import { foodCategoryTable } from './foodCategory.schema.js';

export const foodCategoryMenuTable = pgTable(
  'FOOD_CATEGORY_RELATION_MENU',
  {
    foodMenuId: integer('FOOD_MENU_ID')
      .notNull()
      .references(() => foodMenuTable.id),

    foodCategoryId: integer('FOOD_CATEGORY_ID')
      .notNull()
      .references(() => foodCategoryTable.id),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.foodMenuId, table.foodCategoryId],
    }),
  }),
);
