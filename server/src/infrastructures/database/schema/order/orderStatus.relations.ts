import { relations } from 'drizzle-orm';
import { orderStatusTable } from './orderStatus.schema.js';
import { customerOrderTable } from './customerOrder.schema.js';
import { orderStatusLogTable } from './orderStatusLog.schema.js';

export const orderStatusRelations = relations(orderStatusTable, ({ many }) => ({
  orders: many(customerOrderTable),

  logs: many(orderStatusLogTable),
}));
