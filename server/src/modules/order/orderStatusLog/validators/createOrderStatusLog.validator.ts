import { z } from 'zod';

export const createOrderStatusLogValidator = z.object({
  customerOrderId: z.number().positive(),
  orderStatusId: z.number().positive(),
  updatedBy: z.number().positive().optional(),
  note: z.string().optional(),
})
  .strict();
