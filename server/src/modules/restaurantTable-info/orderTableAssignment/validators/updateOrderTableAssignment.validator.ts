import { z } from 'zod';

export const updateOrderTableAssignmentValidator = z
  .object({
    customerOrderId: z.number().int().positive().optional(),
    restaurantTableId: z.number().int().positive().optional(),
  })
  .strict();
