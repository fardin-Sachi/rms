import { z } from 'zod';

export const orderTableAssignmentRestaurantTableIdParamValidator = z.object({
  restaurantTableId: z.coerce
    .number({ error: 'Restaurant Table ID must be a number' })
    .int({ error: 'Restaurant Table ID must be an integer' })
    .positive({ error: 'Restaurant Table ID must be a positive number' }),
});
