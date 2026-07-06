import { relations } from 'drizzle-orm';
import { memberTable } from './member.schema.js';
import { customerTable } from './customer.schema.js';
import { employeeTable } from '../employee/employee.schema.js';

export const memberRelations = relations(memberTable, ({ one }) => ({
  customer: one(customerTable, {
    fields: [memberTable.customerId],
    references: [customerTable.id],
  }),

  createdByEmployee: one(employeeTable, {
    fields: [memberTable.createdBy],
    references: [employeeTable.id],
    relationName: 'memberCreatedBy',
  }),

  updatedByEmployee: one(employeeTable, {
    fields: [memberTable.updatedBy],
    references: [employeeTable.id],
    relationName: 'memberUpdatedBy',
  }),
}));
