import { z } from 'zod';

export const deleteRestaurantTableArrayValidator = z.object({
  ids: z.array(z.number().int().positive()),
})
  .strict();
