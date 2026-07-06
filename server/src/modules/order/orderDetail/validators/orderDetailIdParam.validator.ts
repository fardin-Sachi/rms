import { z } from 'zod';

export const orderDetailIdParamValidator = z
  .object({
    id: z.coerce
      .number({ error: 'Order Detail ID must be a number' })
      .int({ error: 'Order Detail ID must be an integer' })
      .positive({ error: 'Order Detail ID must be a positive number' }),
  })
  .strict();
