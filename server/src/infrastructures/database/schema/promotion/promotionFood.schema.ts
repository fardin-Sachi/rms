import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core';
import { promotionTable } from './promotion.schema.js';
import { foodMenuTable } from '../food/foodMenu.schema.js';

export const promotionFoodTable = pgTable(
  'PROMOTION_FOOD',
  {
    promotionId: integer('PROMOTION_ID')
      .notNull()
      .references(() => promotionTable.id),

    foodMenuId: integer('FOOD_MENU_ID')
      .notNull()
      .references(() => foodMenuTable.id),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.promotionId, table.foodMenuId],
    }),
  }),
);
