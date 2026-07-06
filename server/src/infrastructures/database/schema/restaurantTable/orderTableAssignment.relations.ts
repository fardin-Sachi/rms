import { relations } from 'drizzle-orm';
import { orderTableAssignmentTable } from './orderTableAssignment.schema.js';
import { customerOrderTable } from '../order/customerOrder.schema.js';
import { restaurantTableTable } from './restaurantTable.schema.js';

export const orderTableAssignmentRelations = relations(
  orderTableAssignmentTable,
  ({ one }) => ({
    order: one(customerOrderTable, {
      fields: [orderTableAssignmentTable.customerOrderId],
      references: [customerOrderTable.id],
    }),

    table: one(restaurantTableTable, {
      fields: [orderTableAssignmentTable.restaurantTableId],
      references: [restaurantTableTable.id],
    }),
  }),
);
