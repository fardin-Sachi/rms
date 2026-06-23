import {
  serial,
  boolean,
  date,
  integer,
  pgTable,
  numeric,
  timestamp,
} from 'drizzle-orm/pg-core';
import { employeeTable } from './employee.schema.js';

export const salarySheetTable = pgTable('SALARY_SHEET', {
  id: serial('ID').primaryKey(),

  employeeId: integer('EMPLOYEE_ID')
    .notNull()
    .references(() => employeeTable.id),

  salaryAmount: numeric('SALARY_AMOUNT', {
    precision: 12,
    scale: 2,
  }).notNull(),

  salaryStartDate: date('SALARY_START_DATE'),

  salaryEndDate: date('SALARY_END_DATE'),

  activeStatus: boolean('ACTIVE_STATUS').default(true).notNull(),

  createdBy: integer('CREATED_BY').references(() => employeeTable.id),

  createdOn: timestamp('CREATED_ON'),

  updatedBy: integer('UPDATED_BY').references(() => employeeTable.id),

  updatedOn: timestamp('UPDATED_ON'),
});
