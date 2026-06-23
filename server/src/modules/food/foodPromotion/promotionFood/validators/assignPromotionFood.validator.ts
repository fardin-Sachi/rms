import { z } from 'zod';

export const assignPromotionFoodValidator = z.object({
  promotionId: z.coerce.number().int().positive(),
  foodMenuIds: z.array(z.coerce.number().int().positive()).min(1),
});
