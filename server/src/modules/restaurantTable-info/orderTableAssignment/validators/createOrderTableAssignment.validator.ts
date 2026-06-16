import { z } from 'zod';

export const createOrderTableAssignmentValidator = z.object({
  customerOrderId: z.number().int().positive(),
  restaurantTableId: z.number().int().positive(),
})
  .strict();
