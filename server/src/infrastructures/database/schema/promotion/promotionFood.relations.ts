import { relations } from 'drizzle-orm';
import { promotionFoodTable } from './promotionFood.schema.js';
import { promotionTable } from './promotion.schema.js';
import { foodMenuTable } from '../food/foodMenu.schema.js';

export const promotionFoodRelations = relations(
  promotionFoodTable,
  ({ one }) => ({
    promotion: one(promotionTable, {
      fields: [promotionFoodTable.promotionId],
      references: [promotionTable.id],
    }),

    foodMenu: one(foodMenuTable, {
      fields: [promotionFoodTable.foodMenuId],
      references: [foodMenuTable.id],
    }),
  }),
);
