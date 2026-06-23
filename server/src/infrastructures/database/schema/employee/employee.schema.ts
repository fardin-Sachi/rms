import {
  serial,
  boolean,
  date,
  integer,
  pgTable,
  timestamp,
  text,
  type AnyPgColumn,
} from 'drizzle-orm/pg-core';
import Sex from '../../../../shared/enums/sex.enum.js';

type SexEnumValue = (typeof Sex.values)[number];

export const employeeTable = pgTable('EMPLOYEE', {
  id: serial('ID').primaryKey(),

  name: text('NAME').notNull(),

  dob: date('DOB'),

  contact: text('CONTACT').notNull(),

  email: text('EMAIL'),

  sex: integer('SEX').$type<SexEnumValue>().notNull(),

  joiningDate: date('JOINING_DATE'),

  endDate: date('END_DATE'),

  nidNumber: text('NID_NUMBER').unique(),

  imageUrl: text('IMAGE_URL'),

  password: text('PASSWORD').notNull(),

  lastLogin: timestamp('LAST_LOGIN'),

  onVacation: boolean('ON_VACATION').default(false).notNull(),

  activeStatus: boolean('ACTIVE_STATUS').default(true).notNull(),

  createdBy: integer('CREATED_BY').references(
    (): AnyPgColumn => employeeTable.id,
  ),

  createdOn: timestamp('CREATED_ON'),

  updatedBy: integer('UPDATED_BY').references(
    (): AnyPgColumn => employeeTable.id,
  ),

  updatedOn: timestamp('UPDATED_ON'),
});
