import { relations } from 'drizzle-orm';
import { foodCategoryTable } from './foodCategory.schema.js';
import { foodCategoryMenuTable } from './foodCategoryMenu.schema.js';

export const foodCategoryRelations = relations(
  foodCategoryTable,
  ({ many }) => ({
    menus: many(foodCategoryMenuTable),
  }),
);
