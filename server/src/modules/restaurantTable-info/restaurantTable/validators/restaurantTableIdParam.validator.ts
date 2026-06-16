import { z } from 'zod';

export const restaurantTableIdParamValidator = z.object({
  id: z.coerce
    .number({ error: 'Restaurant table ID must be a number' })
    .int({ error: 'Restaurant table ID must be an integer' })
    .positive({ error: 'Restaurant table ID must be a positive number' }),
});
