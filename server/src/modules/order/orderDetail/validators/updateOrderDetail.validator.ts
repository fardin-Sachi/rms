import { z } from 'zod';

export const updateOrderDetailValidator = z.object({
  orderTypeId: z.number().positive().optional(),

  unitPrice: z.number().positive().optional(),
  quantity: z.number().positive().optional(),
  promotionId: z.number().positive().optional(),
  discountAmount: z.number().nonnegative().optional(),
  lineTotal: z.number().positive().optional(),
  finalAmount: z.number().positive().optional(),
  activeStatus: z.boolean({ error: 'Active status must be true or false' }).optional(),
})
  .strict();
