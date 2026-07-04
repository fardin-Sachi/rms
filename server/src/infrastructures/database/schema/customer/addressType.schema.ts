import { serial, pgTable, text } from 'drizzle-orm/pg-core';
import AddressType from '../../../../modules/customer-info/member/enums/addressType.enum.js';

type AddressTypeEnum = (typeof AddressType.names)[number];

export const addressTypeTable = pgTable('ADDRESS_TYPE', {
  id: serial('ID').primaryKey(),

  name: text('NAME').$type<AddressTypeEnum>().notNull().unique(),
});
