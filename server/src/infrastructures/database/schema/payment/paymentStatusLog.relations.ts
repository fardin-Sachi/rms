import { paymentStatusLogTable } from './paymentStatusLog.schema.js';
import { relations } from 'drizzle-orm';
import { paymentTable } from './payment.schema.js';
import { paymentStatusTable } from './paymentStatus.schema.js';
import { employeeTable } from '../employee/employee.schema.js';

export const paymentStatusLogRelations = relations(
  paymentStatusLogTable,
  ({ one }) => ({
    payment: one(paymentTable, {
      fields: [paymentStatusLogTable.paymentId],
      references: [paymentTable.id],
    }),

    status: one(paymentStatusTable, {
      fields: [paymentStatusLogTable.paymentStatusId],
      references: [paymentStatusTable.id],
    }),

    updatedByEmployee: one(employeeTable, {
      fields: [paymentStatusLogTable.updatedBy],
      references: [employeeTable.id],
      relationName: 'paymentStatusLogUpdatedBy',
    }),
  }),
);
