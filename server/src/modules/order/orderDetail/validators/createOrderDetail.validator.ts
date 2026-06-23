import { z } from 'zod';

export const createOrderDetailValidator = z
  .object({
    customerOrderId: z.number().positive(),
    foodMenuId: z.number().positive(),
    orderTypeId: z.number().positive(),

    unitPrice: z.number().positive(),
    quantity: z.number().positive(),
    promotionId: z.number().positive().optional(),
    discountAmount: z.number().nonnegative().default(0),
    lineTotal: z.number().positive(),
    finalAmount: z.number().positive(),
    activeStatus: z.boolean({ error: 'Active status must be true or false' }),
  })
  .strict();
