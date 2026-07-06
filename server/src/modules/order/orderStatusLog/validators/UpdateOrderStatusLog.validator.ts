import { z } from 'zod';

export const updateOrderStatusLogValidator = z
  .object({
    note: z.string().optional(),
  })
  .strict();
