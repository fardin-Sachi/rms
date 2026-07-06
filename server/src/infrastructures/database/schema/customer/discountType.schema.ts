import { serial, pgTable, text } from 'drizzle-orm/pg-core';
import DiscountType from '../../../../modules/customer-info/member/enums/discountType.enum.js';

type DiscountTypeEnum = (typeof DiscountType.names)[number];

export const discountTypeTable = pgTable('DISCOUNT_TYPE', {
  id: serial('ID').primaryKey(),

  name: text('NAME').$type<DiscountTypeEnum>().notNull().unique(),
});
