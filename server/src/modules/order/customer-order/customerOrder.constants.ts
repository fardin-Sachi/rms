/*
 * When updating any of the constant values below, check if
 * the modified value is being used in the DB table definition.
 * If so, generate a migration.
 */

// Customer Order Number Length
export const MAXIMUM_CUSTOMER_ORDER_LENGTH = 3 + 1 + 8 + 1 + 5; //ORD-20260622-B4F9 (i.e. ORD-{Date}-{Random String}
