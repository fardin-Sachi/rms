import { z } from 'zod';
import ENV from '../../../configs/index.config.js';
import {
  MAXIMUM_CUSTOEMR_NAME_LENGTH,
  MAXIMUM_CUSTOMER_CONTACT_LENGTH,
  MINIMUM_CUSTOEMR_NAME_LENGTH,
  MINIMUM_CUSTOMER_CONTACT_LENGTH
} from "../customer.constants.js";

export const updateCustomerArraySchema = z.array(
  z.object({
    id: z.coerce
      .number({ error: 'Customer ID must be a number' })
      .int({ error: 'Customer ID must be an integer' })
      .positive({ error: 'Customer ID must be a positive number' }),

    name: z
      .string({ error: 'Name must be a string' })
      .min(MINIMUM_CUSTOEMR_NAME_LENGTH, {
        error: `Name must be at least ${MINIMUM_CUSTOEMR_NAME_LENGTH} characters long`,
      })
      .max(MAXIMUM_CUSTOEMR_NAME_LENGTH, {
        error:
          ENV.serverEnv.NODE_ENV === 'production'
            ? `Too much characters`
            : `Name cannot exceed ${MAXIMUM_CUSTOEMR_NAME_LENGTH} characters`,
      })
      .optional(),

    contact: z
      .string({ error: 'Contact must be a string' })
      .min(MINIMUM_CUSTOMER_CONTACT_LENGTH, {
        error: `Contact must be at least ${MINIMUM_CUSTOMER_CONTACT_LENGTH} characters long`,
      })
      .max(MAXIMUM_CUSTOMER_CONTACT_LENGTH, {
        error:
          ENV.serverEnv.NODE_ENV === 'production'
            ? `Too much characters`
            : `Contact cannot exceed ${MAXIMUM_CUSTOMER_CONTACT_LENGTH} characters`,
      })
      .optional(),

    email: z
      .email({ error: 'Please provide a valid email address' })
      .optional(),

  }),
);
