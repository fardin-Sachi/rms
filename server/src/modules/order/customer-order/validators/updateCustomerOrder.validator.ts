import { z } from 'zod';

export const updateCustomerOrderValidator = z
  .object({
    customerId: z.number().positive().optional(),
    employeeId: z.number().positive().optional(),
    orderStatusId: z.number().positive().optional(),
    subtotal: z.number().nonnegative().optional(),
    discount: z.number().nonnegative().default(0),
    vat: z.number().nonnegative().default(0),
    netTotal: z.number().nonnegative().optional(),
  })
  .strict();
