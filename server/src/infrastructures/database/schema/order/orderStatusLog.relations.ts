import { relations } from 'drizzle-orm';
import { customerOrderTable } from './customerOrder.schema.js';
import { orderStatusTable } from './orderStatus.schema.js';
import { employeeTable } from '../employee/employee.schema.js';
import { orderStatusLogTable } from './orderStatusLog.schema.js';

export const orderStatusLogRelations = relations(
  orderStatusLogTable,
  ({ one }) => ({
    order: one(customerOrderTable, {
      fields: [orderStatusLogTable.customerOrderId],
      references: [customerOrderTable.id],
    }),

    status: one(orderStatusTable, {
      fields: [orderStatusLogTable.orderStatusId],
      references: [orderStatusTable.id],
    }),

    updatedByEmployee: one(employeeTable, {
      fields: [orderStatusLogTable.updatedBy],
      references: [employeeTable.id],
    }),
  }),
);
