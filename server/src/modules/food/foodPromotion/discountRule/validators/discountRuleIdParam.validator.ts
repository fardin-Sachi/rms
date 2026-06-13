import { z } from 'zod';

export const dicountRuleIdParamValidator = z
  .object({
    id: z.coerce
      .number({ error: 'Discount Rule must be a number' })
      .int({ error: 'Discount Rule must be an integer' })
      .positive({ error: 'Discount Rule must be a positive number' }),
  })
  .strict();
