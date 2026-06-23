import { z } from 'zod';

export const updateBuyXGetYRuleValidator = z
  .object({
    buyFoodId: z.coerce.number().int().positive().optional(),
    buyQuantity: z.coerce.number().int().positive().optional(),
    freeFoodId: z.coerce.number().int().positive().optional(),
    freeFoodQuantity: z.coerce.number().int().positive().optional(),
  })
  .refine((body) => Object.keys(body).length > 0, {
    message: 'At least one field is required',
  });
