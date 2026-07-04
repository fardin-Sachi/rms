import { integer, pgTable, timestamp, text, serial } from 'drizzle-orm/pg-core';
import { customerTable } from './customer.schema.js';
import { employeeTable } from '../employee/employee.schema.js';
import { addressTypeTable } from './addressType.schema.js';

export const memberAddressTable = pgTable('MEMBER_ADDRESS', {
  id: serial('ID').primaryKey(),

  customerId: integer('CUSTOMER_ID')
    .notNull()
    .references(() => customerTable.id),

  addressTypeId: integer('ADDRESS_TYPE_ID').references(
    () => addressTypeTable.id,
  ),

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
