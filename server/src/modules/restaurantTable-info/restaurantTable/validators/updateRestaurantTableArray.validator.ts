import { z } from 'zod';

export const updateRestaurantTableArrayValidator = z.array(
  z.object({
    id: z.coerce
      .number({ error: 'Restaurant table ID must be a number' })
      .int({ error: 'Restaurant table ID must be an integer' })
      .positive({ error: 'Restaurant table ID must be a positive number' })
      .optional(),

    tableNo: z.coerce
      .string({ error: 'Table number must be a string' })
      .optional(),

    capacity: z.coerce
      .number({ error: 'Capacity must be a number' })
      .int({ error: 'Capacity ID must be an integer' })
      .positive({ error: 'Capacity ID must be a positive number' })
      .optional(),

    activeStatus: z
      .boolean({ error: 'Active status must be true or false' })
      .optional(),
  }),
);
