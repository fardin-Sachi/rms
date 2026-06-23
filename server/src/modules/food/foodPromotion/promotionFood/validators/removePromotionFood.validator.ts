import { z } from 'zod';

export const removePromotionFoodValidator = z.object({
  promotionId: z.coerce.number().int().positive(),
  foodMenuId: z.coerce.number().int().positive(),
});
