import { z } from 'zod';

export const updateDiscountRuleValidator = z
  .object({
    discountTypeId: z.coerce.number().int().positive().optional(),
    discountValue: z.coerce.number().positive().optional(),
  })
  .refine((body) => Object.keys(body).length > 0, {
    message: 'At least one field is required',
  });
