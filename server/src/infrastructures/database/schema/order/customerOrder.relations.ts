import { relations } from 'drizzle-orm';
import { customerOrderTable } from './customerOrder.schema.js';
import { customerTable } from '../customer/customer.schema.js';
import { employeeTable } from '../employee/employee.schema.js';
import { orderDetailTable } from './orderDetail.schema.js';
import { orderTableAssignmentTable } from '../restaurantTable/orderTableAssignment.schema.js';
import { orderStatusTable } from './orderStatus.schema.js';
import { paymentTable } from '../payment/payment.schema.js';
import { orderStatusLogTable } from './orderStatusLog.schema.js';

export const customerOrderRelations = relations(
  customerOrderTable,
  ({ one, many }) => ({
    customer: one(customerTable, {
      fields: [customerOrderTable.customerId],
      references: [customerTable.id],
    }),

    employee: one(employeeTable, {
      fields: [customerOrderTable.employeeId],
      references: [employeeTable.id],
    }),

    orderStatus: one(orderStatusTable, {
      fields: [customerOrderTable.orderStatusId],
      references: [orderStatusTable.id],
    }),

    details: many(orderDetailTable),

    statusLogs: many(orderStatusLogTable),

    tableAssignments: many(orderTableAssignmentTable),

    payments: many(paymentTable),

    createdByEmployee: one(employeeTable, {
      fields: [customerOrderTable.createdBy],
      references: [employeeTable.id],
      relationName: 'customerOrderCreatedBy',
    }),

    updatedByEmployee: one(employeeTable, {
      fields: [customerOrderTable.updatedBy],
      references: [employeeTable.id],
      relationName: 'customerOrderUpdatedBy',
    }),
  }),
);
