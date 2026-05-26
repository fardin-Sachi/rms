import { z } from 'zod';

export const empAddressSchema = z
  .object({
    addressLine1: z
      .string({ error: 'Please enter a valid address line 1' })
      .optional(),

    addressLine2: z
      .string({ error: 'Please enter a valid address line 2' })
      .optional(),

    city: z.string({ error: 'Please enter a valid city' }).optional(),

    state: z
      .string({ error: 'Please enter a valid address line 1' })
      .optional(),

    postalCode: z
      .string({ error: 'Please enter a valid address line 1' })
      .optional(),

    country: z
      .string({ error: 'Please enter a valid address line 1' })
      .optional(),
  })
  .strict();
