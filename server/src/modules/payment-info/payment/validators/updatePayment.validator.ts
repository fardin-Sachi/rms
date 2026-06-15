import { z } from 'zod';

export const updatePaymentValidator = z.object({
  paymentTypeId: z.number().int().positive().optional(),
  transactionId: z.string().max(255).optional(),
  amount: z.number().positive().optional(),
  currentPaymentStatusId: z.number().int().positive().optional(),
  paymentTime: z.date().optional().optional(),
})
  .strict();
