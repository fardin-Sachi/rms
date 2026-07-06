import { relations } from 'drizzle-orm';
import { employeeTable } from './employee.schema.js';
import { employeeRoleAssignmentTable } from './employeeRoleAssignment.schema.js';
import { salarySheetTable } from './salarySheet.schema.js';
import { foodMenuTable } from '../food/foodMenu.schema.js';
import { customerTable } from '../customer/customer.schema.js';
import { memberTable } from '../customer/member.schema.js';
import { memberAddressTable } from '../customer/memberAddress.schema.js';
import { customerOrderTable } from '../order/customerOrder.schema.js';
import { paymentTable } from '../payment/payment.schema.js';
import { paymentStatusLogTable } from '../payment/paymentStatusLog.schema.js';
import { promotionTable } from '../promotion/promotion.schema.js';

export const employeeRelations = relations(employeeTable, ({ many, one }) => ({
  // EMPLOYEE Module Relations
  employeeCreatedByEmployee: one(employeeTable, {
    fields: [employeeTable.createdBy],
    references: [employeeTable.id],
    relationName: 'EMPLOYEE_CREATED_BY',
  }),

  employeeUpdatedByEmployee: one(employeeTable, {
    fields: [employeeTable.updatedBy],
    references: [employeeTable.id],
    relationName: 'EMPLOYEE_UPDATED_BY',
  }),

  createdEmployees: many(employeeTable, {
    relationName: 'EMPLOYEE_CREATED_BY',
  }),

  updatedEmployees: many(employeeTable, {
    relationName: 'EMPLOYEE_UPDATED_BY',
  }),

  roleAssignments: many(employeeRoleAssignmentTable),

  salaries: many(salarySheetTable, {
    relationName: 'salaryEmployee',
  }),

  createdSalarySheets: many(salarySheetTable, {
    relationName: 'salaryCreatedBy',
  }),

  updatedSalarySheets: many(salarySheetTable, {
    relationName: 'salaryUpdatedBy',
  }),
  // EMPLOYEE Module Relations finished

  // FOOD_MENU Module Relations
  createdFoodMenus: many(foodMenuTable, {
    relationName: 'foodMenuCreatedBy',
  }),

  updatedFoodMenus: many(foodMenuTable, {
    relationName: 'foodMenuUpdatedBy',
  }),
  // FOOD_MENU Module Relations finished

  // CUSTOMER Module Relations
  createdCustomer: many(customerTable, {
    relationName: 'customerCreatedBy',
  }),

  updatedCustomer: many(customerTable, {
    relationName: 'customerUpdatedBy',
  }),
  // CUSTOMER Module Relations finished

  // MEMBER Module Relations
  createdMember: many(memberTable, {
    relationName: 'memberCreatedBy',
  }),

  updatedMember: many(memberTable, {
    relationName: 'memberUpdatedBy',
  }),
  // MEMBER Module Relations finished

  // MEMBER ADDRESS Module Relations
  createdMemberAddress: many(memberAddressTable, {
    relationName: 'memberAddressCreatedBy',
  }),

  updatedMemberAddress: many(memberAddressTable, {
    relationName: 'memberAddressUpdatedBy',
  }),
  // MEMBER Address Module Relations finished

  // CUSTOMER ORDER Module Relations
  createdCustomerOrder: many(customerOrderTable, {
    relationName: 'customerOrderCreatedBy',
  }),

  updatedCustomerOrder: many(customerOrderTable, {
    relationName: 'customerOrderUpdatedBy',
  }),
  // CUSTOMER ORDER Module Relations finished

  // PAYMENT Module Relations
  createdPayment: many(paymentTable, {
    relationName: 'paymentCreatedBy',
  }),

  updatedPayment: many(paymentTable, {
    relationName: 'paymentUpdatedBy',
  }),
  // PAYMENT Module Relations finished

  // PAYMENT STATUS LOG Module Relations
  updatedPaymentStatusLog: many(paymentStatusLogTable, {
    relationName: 'paymentStatusLogUpdatedBy',
  }),
  // PAYMENT STATUS LOG Module Relations finished

  // PROMOTION Module Relations
  createdPromotion: many(promotionTable, {
    relationName: 'promotionCreatedBy',
  }),

  updatedPromotion: many(promotionTable, {
    relationName: 'promotionUpdatedBy',
  }),
  // PROMOTION Module Relations finished
}));
