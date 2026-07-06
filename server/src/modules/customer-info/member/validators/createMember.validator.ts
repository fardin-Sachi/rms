import { z } from 'zod';
import ENV from '../../../../configs/index.config.js';
import DiscountType from '../enums/discountType.enum.js';

export const createMemberValidator = z
  .object({
    points: z.coerce
      .number({ error: 'Points must be a number' })
      .min(0, {
        error: 'Points cannot be negative',
      })
      .optional(),

    discount: z.coerce
      .number({ error: 'Discount amount must be a number' })
      .min(0, {
        error: 'Discount amount cannot be negative',
      })
      .optional(),

    discountTypeId: z.coerce
      .number({ error: 'Discount type ID must be a number' })
      .int({ error: 'Discount type ID must be a integer' })
      .refine((val) => DiscountType.values.includes(val as never), {
        message: `Discount type ID must be one of: ${DiscountType.values.join(', ')}`,
      })
      .optional(),

    discountTypeName: z
      .string({ error: 'Discount type name must be a string' })
      .transform((val) => val.toUpperCase())
      .pipe(
        z.enum(DiscountType.names, {
          error: `Discount type name must be one of: ${DiscountType.names.join(', ')}`,
        }),
      )
      .optional(),

    dob: z.coerce
      .date({ error: 'Date of birth must be a valid date' })
      .optional(),

    cardIssueDate: z.coerce.date({
      error: 'Card issue date must be a valid date',
    }),

    membershipExpiryDate: z.coerce.date({
      error: 'Card expiry date must be a valid date',
    }),

    activeStatus: z.boolean({ error: 'Active status must be true or false' }),
  })
  .refine(
    (data) =>
      data.discountTypeId !== undefined || data.discountTypeName !== undefined,
    ENV.serverEnv.NODE_ENV === 'production'
      ? {
          message: 'Please provide a discount type',
        }
      : {
          message: 'Either discountTypeId or discountTypeName is required',
          path: ['discountTypeId'],
        },
  )
  .strict();
