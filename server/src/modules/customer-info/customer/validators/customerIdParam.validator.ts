import { z } from 'zod';

export const customerIdParamValidator = z
  .object({
    id: z.coerce
      .number({ error: 'Customer ID must be a number' })
      .int({ error: 'Customer ID must be an integer' })
      .positive({ error: 'Customer ID must be a positive number' }),
  })
  .strict();
