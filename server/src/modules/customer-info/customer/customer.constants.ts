/*
 * When updating any of the constant values below, check if
 * the modified value is being used in the DB table definition.
 * If so, generate a migration.
 */

// Customer Nama length
export const MINIMUM_CUSTOEMR_NAME_LENGTH = 3;
export const MAXIMUM_CUSTOEMR_NAME_LENGTH = 100;

// Customer Contact length
export const MINIMUM_CUSTOMER_CONTACT_LENGTH = 5;
export const MAXIMUM_CUSTOMER_CONTACT_LENGTH = 30;

// Customer Email length
export const MINIMUM_CUSTOMER_EMAIL_LENGTH = 5; // e.g. a@b.c
export const MAXIMUM_CUSTOMER_EMAIL_LENGTH = 30;

// Customer Address Type Length
export const MINIMUM_MEMBER_ADDRESS_TYPE_LENGTH = 3; // e.g. a@b.c
export const MAXIMUM_MEMBER_ADDRESS_TYPE_LENGTH = 15;
