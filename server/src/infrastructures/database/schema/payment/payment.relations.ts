import { relations } from 'drizzle-orm';

import { paymentTable } from './payment.schema.js';
import { paymentStatusLogTable } from './paymentStatusLog.schema.js';

import { paymentStatusTable } from './paymentStatus.schema.js';
import { paymentTypeTable } from './paymentType.schema.js';

import { customerOrderTable } from '../order/customerOrder.schema.js';

import { employeeTable } from '../employee/employee.schema.js';

export const paymentRelations = relations(paymentTable, ({ one, many }) => ({
  order: one(customerOrderTable, {
    fields: [paymentTable.customerOrderId],
    references: [customerOrderTable.id],
  }),

  paymentType: one(paymentTypeTable, {
    fields: [paymentTable.paymentTypeId],
    references: [paymentTypeTable.id],
  }),

  currentStatus: one(paymentStatusTable, {
    fields: [paymentTable.currentPaymentStatusId],
    references: [paymentStatusTable.id],
  }),

  createdByEmployee: one(employeeTable, {
    fields: [paymentTable.createdBy],
    references: [employeeTable.id],
    relationName: 'paymentCreatedBy',
  }),

  updatedByEmployee: one(employeeTable, {
    fields: [paymentTable.updatedBy],
    references: [employeeTable.id],
    relationName: 'paymentUpdatedBy',
  }),

  statusLogs: many(paymentStatusLogTable),
}));
