import { z } from 'zod';

export const orderStatusLogIdParamValidator = z
  .object({
    id: z.coerce
      .number({ error: 'Order Status Log ID must be a number' })
      .int({ error: 'Order Status Log ID must be an integer' })
      .positive({ error: 'Order Status Log ID must be a positive number' }),
  })
  .strict();
