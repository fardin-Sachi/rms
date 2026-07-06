import { z } from 'zod';

export const memberIdParamValidator = z
  .object({
    customerId: z.coerce
      .number({ error: 'Member ID must be a number' })
      .int({ error: 'Member ID must be an integer' })
      .positive({ error: 'Member ID must be a positive number' }),
  })
  .strict();
