import { z } from 'zod';

export const paymentIdParamValidator = z
  .object({
    id: z.coerce
      .number({ error: 'Payment ID must be a number' })
      .int({ error: 'Payment ID must be an integer' })
      .positive({ error: 'Payment ID must be a positive number' }),
  })
  .strict();
