import {
  serial,
  boolean,
  integer,
  interval,
  pgTable,
  timestamp,
  text,
  numeric,
} from 'drizzle-orm/pg-core';
import { employeeTable } from '../employee/employee.schema.js';

export const foodMenuTable = pgTable('FOOD_MENU', {
  id: serial('ID').primaryKey(),

  name: text('NAME'),

  description: text('DESCRIPTION'),

  imageUrl: text('IMAGE_URL'),

  preparationTime: interval('PREPARATION_TIME'),

  price: numeric('PRICE', {
    precision: 12,
    scale: 2,
  }),

  activeStatus: boolean('ACTIVE_STATUS').default(true).notNull(),

  createdBy: integer('CREATED_BY').references(() => employeeTable.id),

  createdOn: timestamp('CREATED_ON'),

  updatedBy: integer('UPDATED_BY').references(() => employeeTable.id),

  updatedOn: timestamp('UPDATED_ON'),
});
