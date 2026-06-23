import {
  pgTable,
  serial,
  integer,
  doublePrecision,
  boolean,
} from 'drizzle-orm/pg-core';
import { customerOrderTable } from './customerOrder.schema.js';
import { foodMenuTable } from '../food/foodMenu.schema.js';
import { orderTypeTable } from './orderType.schema.js';
import { promotionTable } from '../promotion/promotion.schema.js';

export const orderDetailTable = pgTable('ORDER_DETAIL', {
  id: serial('ID').primaryKey(),

  customerOrderId: integer('CUSTOMER_ORDER_ID')
    .notNull()
    .references(() => customerOrderTable.id),

  foodMenuId: integer('FOOD_MENU_ID')
    .notNull()
    .references(() => foodMenuTable.id),

  orderTypeId: integer('ORDER_TYPE_ID')
    .notNull()
    .references(() => orderTypeTable.id),

  promotionId: integer('PROMOTION_ID').references(() => promotionTable.id),

  unitPrice: doublePrecision('UNIT_PRICE'),

  quantity: integer('QUANTITY'),

  discountAmount: doublePrecision('DISCOUNT_AMOUNT'),

  lineTotal: doublePrecision('LINE_TOTAL'),

  finalAmount: doublePrecision('FINAL_AMOUNT'),

  activeStatus: boolean('ACTIVE_STATUS').default(true).notNull(),
});
