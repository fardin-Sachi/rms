import { employeeRoleTable } from './employeeRole.schema.js';
import { relations } from 'drizzle-orm';
import { employeeRoleAssignmentTable } from './employeeRoleAssignment.schema.js';

export const employeeRoleRelations = relations(
  employeeRoleTable,
  ({ many }) => ({
    assignments: many(employeeRoleAssignmentTable),
  }),
);
