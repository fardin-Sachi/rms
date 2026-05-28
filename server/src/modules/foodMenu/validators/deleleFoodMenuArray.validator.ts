import { z } from 'zod';

export const deleteFoodMenuArraySchema = z.array(
  z.coerce
    .number({ error: 'Food menu ID must be a number' })
    .int({ error: 'Food menu ID must be an integer' })
    .positive({ error: 'Food menu ID must be a positive number' }),
);
