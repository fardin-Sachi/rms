import {employeeTable} from "./employee.schema.js";
import {relations} from "drizzle-orm";
import {salarySheetTable} from "./salarySheet.schema.js";

export const salarySheetRelations = relations(salarySheetTable, ({ one }) => ({
  employee: one(employeeTable, {
    fields: [salarySheetTable.employeeId],
    references: [employeeTable.id],
    relationName: "salaryEmployee",
  }),

  createdByEmployee: one(employeeTable, {
    fields: [salarySheetTable.createdBy],
    references: [employeeTable.id],
    relationName: "salaryCreatedBy",
  }),

  updatedByEmployee: one(employeeTable, {
    fields: [salarySheetTable.updatedBy],
    references: [employeeTable.id],
    relationName: "salaryUpdatedBy",
  }),
}));