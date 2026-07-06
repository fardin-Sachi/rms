import { relations } from 'drizzle-orm';
import { customerTable } from './customer.schema.js';
import { memberTable } from './member.schema.js';
import { memberAddressTable } from './memberAddress.schema.js';
import { customerOrderTable } from '../order/customerOrder.schema.js';
import { employeeTable } from '../employee/employee.schema.js';

export const customerRelations = relations(customerTable, ({ one, many }) => ({
  member: one(memberTable, {
    fields: [customerTable.id],
    references: [memberTable.customerId],
  }),

  memberAddress: one(memberAddressTable, {
    fields: [customerTable.id],
    references: [memberAddressTable.customerId],
  }),

  orders: many(customerOrderTable),

  createdByEmployee: one(employeeTable, {
    fields: [customerTable.createdBy],
    references: [employeeTable.id],
    relationName: 'customerCreatedBy',
  }),

  updatedByEmployee: one(employeeTable, {
    fields: [customerTable.updatedBy],
    references: [employeeTable.id],
    relationName: 'customerUpdatedBy',
  }),
}));
