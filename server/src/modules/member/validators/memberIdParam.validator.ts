import { z } from 'zod';

export const memberIdParamSchema = z
  .object({
    memberId: z.coerce
      .number({ error: 'Customer ID must be a number' })
      .int({ error: 'Customer ID must be an integer' })
      .positive({ error: 'Customer ID must be a positive number' }),
  })
  .strict();
