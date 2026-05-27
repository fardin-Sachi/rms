import { z } from 'zod';
import AddressType from "../enums/addressType.enum.js";

export const memberAddressSchema = z
  .object({

    addressTypeId: z.coerce
      .number({error: 'Address type ID must be a number'})
      .int({error: 'Address type ID must be a integer'})
      .refine(
        (val) => AddressType.values.includes(val as never),
        {
          message: `Address type ID must be one of: ${AddressType.values.join(', ')}`,
        },
      )
      .optional(),

    addressTypeName: z
      .string({error: 'Address type name must be a string'})
      .transform((val) => val.toUpperCase())
      .pipe(
        z.enum(AddressType.names, {
          error: `Address type name must be one of: ${AddressType.names.join(', ')}`,
        }),
      )
      .optional(),
    
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
