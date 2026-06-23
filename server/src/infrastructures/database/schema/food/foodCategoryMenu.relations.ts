import { relations } from 'drizzle-orm';
import { foodCategoryMenuTable } from './foodCategoryMenu.schema.js';
import { foodMenuTable } from './foodMenu.schema.js';
import { foodCategoryTable } from './foodCategory.schema.js';

export const foodCategoryMenuRelations = relations(
  foodCategoryMenuTable,
  ({ one }) => ({
    menu: one(foodMenuTable, {
      fields: [foodCategoryMenuTable.foodMenuId],
      references: [foodMenuTable.id],
    }),

    category: one(foodCategoryTable, {
      fields: [foodCategoryMenuTable.foodCategoryId],
      references: [foodCategoryTable.id],
    }),
  }),
);
