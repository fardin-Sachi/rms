import { integer, pgTable, timestamp, text } from 'drizzle-orm/pg-core';
import { employeeTable } from './employee.schema.js';

export const employeeAddressTable = pgTable('EMPLOYEE_ADDRESS', {
  employeeId: integer('EMPLOYEE_ID')
    .notNull()
    .references(() => employeeTable.id)
    .primaryKey(),

  addressLine1: text('ADDRESS_LINE_1').notNull(),

  addressLine2: text('ADDRESS_LINE_2').notNull(),

  city: text('CITY'),

  state: text('STATE'),

  postalCode: text('POSTAL_CODE'),

  country: text('COUNTRY'),

  createdBy: integer('CREATED_BY').references(() => employeeTable.id),

  createdOn: timestamp('CREATED_ON'),

  updatedBy: integer('UPDATED_BY').references(() => employeeTable.id),

  updatedOn: timestamp('UPDATED_ON'),
});
