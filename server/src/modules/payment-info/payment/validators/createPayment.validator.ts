import { z } from 'zod';

export const createPaymentValidator = z.object({
  customerOrderId: z.number().int().positive(),
  paymentTypeId: z.number().int().positive(),
  transactionId: z.string().max(255).optional(),
  amount: z.number().positive(),
  currentPaymentStatusId: z.number().int().positive(),
  paymentTime: z.date().optional(),
})
  .strict();
