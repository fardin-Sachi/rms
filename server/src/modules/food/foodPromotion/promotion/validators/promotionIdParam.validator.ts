import { z } from 'zod';

export const promotionIdParamValidator = z
  .object({
    id: z.coerce
      .number({ error: 'Promotion ID must be a number' })
      .int({ error: 'Promotion ID must be an integer' })
      .positive({ error: 'Promotion ID must be a positive number' }),
  })
  .strict();
