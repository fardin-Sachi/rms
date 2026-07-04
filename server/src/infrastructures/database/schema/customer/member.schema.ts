import {
  boolean,
  date,
  integer,
  numeric,
  pgTable,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { customerTable } from './customer.schema.js';
import { employeeTable } from '../employee/employee.schema.js';

export const memberTable = pgTable('MEMBER', {
  customerId: integer('customer_id')
    .primaryKey()
    .references(() => customerTable.id),

  membershipNumber: text('membership_number').unique(),

  points: numeric('points', {
    precision: 12,
    scale: 2,
  }),

  discount: numeric('discount', {
    precision: 12,
    scale: 2,
  }),

  discountTypeId: integer('discount_type_id'),

  dob: date('dob'),

  cardIssueDate: date('card_issue_date').notNull(),

  membershipExpiryDate: date('membership_expiry_date'),

  activeStatus: boolean('active_status').default(true).notNull(),

  createdBy: integer('CREATED_BY').references(() => employeeTable.id),

  createdOn: timestamp('CREATED_ON'),

  updatedBy: integer('UPDATED_BY').references(() => employeeTable.id),

  updatedOn: timestamp('UPDATED_ON'),
});
