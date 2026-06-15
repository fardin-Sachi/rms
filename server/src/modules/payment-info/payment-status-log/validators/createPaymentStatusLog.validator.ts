import { z } from 'zod';

export const createPaymentStatusLogValidator = z.object({
  paymentId: z.number().int().positive(),
  paymentStatusId: z.number().int().positive(),
  changedAt: z.union([z.date(), z.string().datetime()]).optional(),
});
