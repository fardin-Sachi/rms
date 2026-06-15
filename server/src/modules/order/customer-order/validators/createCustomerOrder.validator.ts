import { z } from 'zod';

export const createCustomerOrderValidator = z.object({
  customerId: z.number().positive().optional(),
  employeeId: z.number().positive(),
  orderStatusId: z.number().positive(),
  subtotal: z.number().nonnegative(),
  discount: z.number().nonnegative().default(0),
  vat: z.number().nonnegative().default(0),
  netTotal: z.number().nonnegative().optional(),
})
  .strict();


