import {
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp,
} from 'drizzle-orm/pg-core';
import { promotionTypeTable } from './promotionType.schema.js';
import { employeeTable } from '../employee/employee.schema.js';

export const promotionTable = pgTable('PROMOTION', {
  id: serial('ID').primaryKey(),

  name: text('NAME').notNull(),

  description: text('DESCRIPTION'),

  promotionTypeId: integer('PROMOTION_TYPE_ID').references(
    () => promotionTypeTable.id,
  ),

  startTime: timestamp('START_TIME'),

  endTime: timestamp('END_TIME'),

  isPermanent: boolean('IS_PERMANENT'),

  activeStatus: boolean('ACTIVE_STATUS').default(true).notNull(),

  createdBy: integer('CREATED_BY').references(() => employeeTable.id),

  createdOn: timestamp('CREATED_ON'),

  updatedBy: integer('UPDATED_BY').references(() => employeeTable.id),

  updatedOn: timestamp('UPDATED_ON'),
});
