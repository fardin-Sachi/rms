import { relations } from 'drizzle-orm';
import { foodMenuTable } from './foodMenu.schema.js';
import { foodCategoryMenuTable } from './foodCategoryMenu.schema.js';
import { employeeTable } from '../employee/employee.schema.js';

export const foodMenuRelations = relations(foodMenuTable, ({ many, one }) => ({
  categories: many(foodCategoryMenuTable),

  createdByEmployee: one(employeeTable, {
    fields: [foodMenuTable.createdBy],
    references: [employeeTable.id],
    relationName: 'foodMenuCreatedBy',
  }),

  updatedByEmployee: one(employeeTable, {
    fields: [foodMenuTable.updatedBy],
    references: [employeeTable.id],
    relationName: 'foodMenuUpdatedBy',
  }),
}));
