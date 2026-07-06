import { z } from 'zod';

export const updateBuyXGetYRuleArrayValidator = z.array(
  z
    .object({
      id: z.coerce
        .number({ error: 'Buy X Get Y Rule ID must be a number' })
        .int({ error: 'Buy X Get Y Rule ID must be an integer' })
        .positive({ error: 'Buy X Get Y Rule ID must be a positive number' }),

      buyFoodId: z.coerce.number().int().positive().optional(),
      buyQuantity: z.coerce.number().int().positive().optional(),
      freeFoodId: z.coerce.number().int().positive().optional(),
      freeFoodQuantity: z.coerce.number().int().positive().optional(),
    })
    .refine((body) => Object.keys(body).length > 0, {
      message: 'At least one field is required',
    }),
);
