import { z } from 'zod';

export const updateDiscountRuleArraySchema = z.array(
  z.object({
    id: z.coerce
      .number({ error: 'Discount Rule ID must be a number' })
      .int({ error: 'Discount Rule ID must be an integer' })
      .positive({ error: 'Discount Rule ID must be a positive number' }),

    discountTypeId: z.coerce.number().int().positive().optional(),

    discountValue: z.coerce.number().positive().optional(),
  }),
);
