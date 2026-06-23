import { relations } from 'drizzle-orm';
import { discountRuleTable } from './discountRule.schema.js';
import { promotionTable } from './promotion.schema.js';
import { promotionTypeTable } from './promotionType.schema.js';

export const discountRuleRelations = relations(
  discountRuleTable,
  ({ one }) => ({
    promotion: one(promotionTable, {
      fields: [discountRuleTable.promotionId],
      references: [promotionTable.id],
    }),

    promotionType: one(promotionTypeTable, {
      fields: [discountRuleTable.promotionTypeId],
      references: [promotionTypeTable.id],
    }),
  }),
);
