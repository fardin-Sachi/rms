import { employeeRoleAssignmentTable } from './employeeRoleAssignment.schema.js';
import { employeeTable } from './employee.schema.js';
import { relations } from 'drizzle-orm';
import { employeeRoleTable } from './employeeRole.schema.js';

export const employeeRoleAssignmentRelations = relations(
  employeeRoleAssignmentTable,
  ({ one }) => ({
    employee: one(employeeTable, {
      fields: [employeeRoleAssignmentTable.employeeId],
      references: [employeeTable.id],
    }),

    role: one(employeeRoleTable, {
      fields: [employeeRoleAssignmentTable.employeeRoleId],
      references: [employeeRoleTable.id],
    }),
  }),
);
