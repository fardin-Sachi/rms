import { z } from 'zod';

export const createBuyXGetYRuleValidator = z.object({
    promotionId: z.coerce.number().int().positive(),
    buyFoodId: z.coerce.number().int().positive(),
    buyQuantity: z.coerce.number().int().positive(),
    freeFoodId: z.coerce.number().int().positive(),
    freeFoodQuantity: z.coerce.number().int().positive(),
});
