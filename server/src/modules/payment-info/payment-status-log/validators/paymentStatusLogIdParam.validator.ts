import { z } from 'zod';

export const paymentStatusLogIdParamValidator = z
  .object({
    id: z.coerce
      .number({ error: 'Payment Status Log ID must be a number' })
      .int({ error: 'Payment Status Log ID must be an integer' })
      .positive({ error: 'Payment Status Log ID must be a positive number' }),
  })
  .strict();
