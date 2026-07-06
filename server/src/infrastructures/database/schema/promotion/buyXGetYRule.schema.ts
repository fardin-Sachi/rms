import { integer, pgTable } from 'drizzle-orm/pg-core';
import { foodMenuTable } from '../food/foodMenu.schema.js';
import { promotionTable } from './promotion.schema.js';

export const buyXGetYRuleTable = pgTable('BUY_X_GET_Y_RULE', {
  promotionId: integer('PROMOTION_ID')
    .primaryKey()
    .references(() => promotionTable.id),

  buyFoodId: integer('BUY_FOOD_ID').references(() => foodMenuTable.id),

  buyQuantity: integer('BUY_QUANTITY').notNull(),

  freeFoodId: integer('FREE_FOOD_ID').references(() => foodMenuTable.id),

  freeFoodQuantity: integer('FREE_FOOD_QUANTITY').notNull(),
});
