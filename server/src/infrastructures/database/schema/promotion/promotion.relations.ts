import { relations } from 'drizzle-orm';
import { promotionTable } from './promotion.schema.js';
import { promotionFoodTable } from './promotionFood.schema.js';
import { discountRuleTable } from './discountRule.schema.js';
import { buyXGetYRuleTable } from './buyXGetYRule.schema.js';
import { promotionTypeTable } from './promotionType.schema.js';
import { employeeTable } from '../employee/employee.schema.js';

export const promotionRelations = relations(
  promotionTable,
  ({ one, many }) => ({
    promotionType: one(promotionTypeTable, {
      fields: [promotionTable.promotionTypeId],
      references: [promotionTypeTable.id],
    }),

    creator: one(employeeTable, {
      fields: [promotionTable.createdBy],
      references: [employeeTable.id],
      relationName: 'promotion_creator',
    }),

    updater: one(employeeTable, {
      fields: [promotionTable.updatedBy],
      references: [employeeTable.id],
      relationName: 'promotion_updater',
    }),

    foods: many(promotionFoodTable),

    discountRule: one(discountRuleTable, {
      fields: [promotionTable.id],
      references: [discountRuleTable.promotionId],
    }),

    buyXGetYRule: one(buyXGetYRuleTable, {
      fields: [promotionTable.id],
      references: [buyXGetYRuleTable.promotionId],
    }),

    createdByEmployee: one(employeeTable, {
      fields: [promotionTable.createdBy],
      references: [employeeTable.id],
      relationName: 'promotionCreatedBy',
    }),

    updatedByEmployee: one(employeeTable, {
      fields: [promotionTable.updatedBy],
      references: [employeeTable.id],
      relationName: 'promotionUpdatedBy',
    }),
  }),
);
