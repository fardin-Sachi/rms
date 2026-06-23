/*
 * When updating any of the constant values below, check if
 * the modified value is being used in the DB table definition.
 * If so, generate a migration.
 */

// Employee Name
export const MINIMUM_EMPLOYEE_NAME_LENGTH = 3;
export const MAXIMUM_EMPLOYEE_NAME_LENGTH = 100;

// Employee NID
export const MINIMUM_EMPLOYEE_NID_LENGTH = 5;
export const MAXIMUM_EMPLOYEE_NID_LENGTH = 30;

// Employee Contact
export const MINIMUM_EMPLOYEE_CONTACT_LENGTH = 5;
export const MAXIMUM_EMPLOYEE_CONTACT_LENGTH = 30;

// Employee Email
export const MINIMUM_EMPLOYEE_EMAIL_LENGTH = 5; // e.g. a@b.c
export const MAXIMUM_EMPLOYEE_EMAIL_LENGTH = 30;

// Employee Password
export const MINIMUM_EMPLOYEE_PASSWORD_LENGTH = 8;
export const MAXIMUM_EMPLOYEE_PASSWORD_LENGTH = 30;

// Employee Image URL
export const MINIMUM_EMPLOYEE_IMAGE_URL_LENGTH = 8;
export const MAXIMUM_EMPLOYEE_IMAGE_URL_LENGTH = 500;

// Employee Role Name
export const MINIMUM_EMPLOYEE_ROLE_NAME_LENGTH = 3;
export const MAXIMUM_EMPLOYEE_ROLE_NAME_LENGTH = 50;

// Employee Address Line 1 Length
export const MINIMUM_EMPLOYEE_ADDRESS_LINE_1_LENGTH = 3;
export const MAXIMUM_EMPLOYEE_ADDRESS_LINE_1_LENGTH = 150;

// Employee Address Line 2 Length
export const MINIMUM_EMPLOYEE_ADDRESS_LINE_2_LENGTH = 3;
export const MAXIMUM_EMPLOYEE_ADDRESS_LINE_2_LENGTH = 150;

// Employee Address City Name Length
export const MINIMUM_EMPLOYEE_ADDRESS_CITY_LENGTH = 3;
export const MAXIMUM_EMPLOYEE_ADDRESS_CITY_LENGTH = 20;

// Employee Address State Name Length
export const MINIMUM_EMPLOYEE_ADDRESS_STATE_LENGTH = 3;
export const MAXIMUM_EMPLOYEE_ADDRESS_STATE_LENGTH = 20;

// Employee Address Postal Code Length
export const MINIMUM_EMPLOYEE_ADDRESS_POSTAL_CODE_LENGTH = 3;
export const MAXIMUM_EMPLOYEE_ADDRESS_POSTAL_CODE_LENGTH = 10;

// Employee Address Country Name Length
export const MINIMUM_EMPLOYEE_ADDRESS_COUNTRY_LENGTH = 3;
export const MAXIMUM_EMPLOYEE_ADDRESS_COUNTRY_LENGTH = 20;
