import { z } from 'zod';

export const foodMenuIdParamSchema = z
  .object({
    id: z.coerce
      .number({ error: 'Food menu ID must be a number' })
      .int({ error: 'Food menu ID must be an integer' })
      .positive({ error: 'Food menu ID must be a positive number' }),
  })
  .strict();
