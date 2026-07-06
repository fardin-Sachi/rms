import { z } from 'zod';

export const orderTableAssignmentCustomerOrderIdParamValidator = z.object({
  customerOrderId: z.coerce
    .number({ error: 'Order Table Assignement ID must be a number' })
    .int({ error: 'Order Table Assignement ID must be an integer' })
    .positive({
      error: 'Order Table Assignement ID must be a positive number',
    }),
});
