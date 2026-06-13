import { z } from 'zod';

export const buyXGetYRuleIdParamValidator = z
  .object({
    promotionId: z.coerce
      .number({ error: 'Promotion ID must be a number' })
      .int({ error: 'Promotion ID must be an integer' })
      .positive({ error: 'Promotion ID must be a positive number' }),
  })
  .strict();
