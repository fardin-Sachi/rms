import { relations } from 'drizzle-orm';
import { memberAddressTable } from './memberAddress.schema.js';
import { customerTable } from './customer.schema.js';
import { employeeTable } from '../employee/employee.schema.js';
import { addressTypeTable } from './addressType.schema.js';

export const memberAddressRelations = relations(
  memberAddressTable,
  ({ one }) => ({
    customer: one(customerTable, {
      fields: [memberAddressTable.customerId],
      references: [customerTable.id],
    }),

    addressType: one(addressTypeTable, {
      fields: [memberAddressTable.addressTypeId],
      references: [addressTypeTable.id],
    }),

    createdByEmployee: one(employeeTable, {
      fields: [memberAddressTable.createdBy],
      references: [employeeTable.id],
      relationName: 'memberAddressCreatedBy',
    }),

    updatedByEmployee: one(employeeTable, {
      fields: [memberAddressTable.updatedBy],
      references: [employeeTable.id],
      relationName: 'memberAddressUpdatedBy',
    }),
  }),
);
