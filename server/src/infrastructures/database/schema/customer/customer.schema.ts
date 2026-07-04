import { serial, integer, pgTable, timestamp, text } from 'drizzle-orm/pg-core';
import { employeeTable } from '../employee/employee.schema.js';

export const customerTable = pgTable('CUSTOMER', {
  id: serial('ID').primaryKey(),

  name: text('NAME'),

  contact: text('CONTACT'),

  email: text('EMAIL').unique(),

  createdBy: integer('CREATED_BY').references(() => employeeTable.id),

  createdOn: timestamp('CREATED_ON'),

  updatedBy: integer('UPDATED_BY').references(() => employeeTable.id),

  updatedOn: timestamp('UPDATED_ON'),
});
