import {z} from 'zod';

export const customerOrderIdParamValidator = z.object({
  id: z.coerce
    .number({ error: 'Customer Order ID must be a number' })
    .int({ error: 'Customer Order ID must be an integer' })
    .positive({ error: 'Customer Order ID must be a positive number' }),
})
  .strict();