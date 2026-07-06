import { relations } from 'drizzle-orm';
import { promotionTable } from './promotion.schema.js';
import { buyXGetYRuleTable } from './buyXGetYRule.schema.js';
import { foodMenuTable } from '../food/foodMenu.schema.js';

export const buyXGetYRuleRelations = relations(
  buyXGetYRuleTable,
  ({ one }) => ({
    promotion: one(promotionTable, {
      fields: [buyXGetYRuleTable.promotionId],
      references: [promotionTable.id],
    }),

    buyFood: one(foodMenuTable, {
      fields: [buyXGetYRuleTable.buyFoodId],
      references: [foodMenuTable.id],
      relationName: 'buy_food',
    }),

    freeFood: one(foodMenuTable, {
      fields: [buyXGetYRuleTable.freeFoodId],
      references: [foodMenuTable.id],
      relationName: 'free_food',
    }),
  }),
);
