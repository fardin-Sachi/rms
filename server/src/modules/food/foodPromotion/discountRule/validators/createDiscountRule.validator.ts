import { z } from 'zod';

export const createDiscountRuleValidator = z.object({
  promotionId: z.coerce.number().int().positive(),
  discountTypeId: z.coerce.number().int().positive(),
  discountValue: z.coerce.number().positive(),
});
