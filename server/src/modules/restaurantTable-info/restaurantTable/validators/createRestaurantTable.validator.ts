import { z } from 'zod';

export const createRestaurantTableValidator = z
  .object({
    capacity: z.number().int().positive().optional(),
    tableNo: z.string().optional(),
    activeStatus: z.boolean().optional(),
  })
  .strict();
