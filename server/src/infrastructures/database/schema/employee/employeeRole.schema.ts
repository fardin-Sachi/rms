import { serial, pgTable, text } from 'drizzle-orm/pg-core';
import EmployeeRole from '../../../../modules/employee-info/employee/enums/employeeRole.enum.js';

type EmployeeRoleEnum = (typeof EmployeeRole.names)[number];

export const employeeRoleTable = pgTable('EMPLOYEE_ROLE', {
  id: serial('ID').primaryKey(),

  name: text('NAME').$type<EmployeeRoleEnum>().notNull().unique(),
});
