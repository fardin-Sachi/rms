import { doublePrecision, integer, pgTable } from 'drizzle-orm/pg-core';
import { promotionTable } from './promotion.schema.js';

export const discountRuleTable = pgTable('DISCOUNT_RULE', {
  promotionId: integer('PROMOTION_ID')
    .primaryKey()
    .references(() => promotionTable.id),

  promotionTypeId: integer('PROMOTION_TYPE_ID').notNull(),

  discountValue: doublePrecision('DISCOUNT_VALUE').notNull(),
});
