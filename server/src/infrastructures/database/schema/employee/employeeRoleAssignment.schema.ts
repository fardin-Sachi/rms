import { integer, pgTable, primaryKey } from 'drizzle-orm/pg-core';
import { employeeTable } from './employee.schema.js';
import { employeeRoleTable } from './employeeRole.schema.js';

export const employeeRoleAssignmentTable = pgTable(
  'EMPLOYEE_ROLE_ASSIGNMENT',
  {
    employeeId: integer('EMPLOYEE_ID')
      .notNull()
      .references(() => employeeTable.id),

    employeeRoleId: integer('EMPLOYEE_ROLE_ID')
      .notNull()
      .references(() => employeeRoleTable.id),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.employeeId, table.employeeRoleId],
    }),
  }),
);
