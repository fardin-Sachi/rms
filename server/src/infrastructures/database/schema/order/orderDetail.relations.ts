import { relations } from 'drizzle-orm';
import { orderDetailTable } from './orderDetail.schema.js';
import { customerOrderTable } from './customerOrder.schema.js';

export const orderDetailRelations = relations(orderDetailTable, ({ one }) => ({
  order: one(customerOrderTable, {
    fields: [orderDetailTable.customerOrderId],
    references: [customerOrderTable.id],
  }),
}));
