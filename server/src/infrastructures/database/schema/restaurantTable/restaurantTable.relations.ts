import { relations } from 'drizzle-orm';
import { restaurantTableTable } from './restaurantTable.schema.js';
import { orderTableAssignmentTable } from './orderTableAssignment.schema.js';

export const restaurantTableRelations = relations(
  restaurantTableTable,
  ({ many }) => ({
    assignments: many(orderTableAssignmentTable),
  }),
);
