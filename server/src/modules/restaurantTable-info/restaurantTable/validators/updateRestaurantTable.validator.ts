import { z } from 'zod';

export const updateRestaurantTableValidator = z
  .object({
    capacity: z.string().optional(),
    tableNo: z.number().int().positive().optional(),
    activeStatus: z.boolean().optional(),
  })
  .strict();
