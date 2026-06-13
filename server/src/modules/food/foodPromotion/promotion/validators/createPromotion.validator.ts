import { z } from 'zod';
import {
  MAXIMUM_PROMOTION_DESCRIPTION_LENGTH,
  MAXIMUM_PROMOTION_NAME_LENGTH,
} from '../promotion.constants.js';

export const createPromotionValidator = z
  .object({
    name: z.string().trim().min(1).max(MAXIMUM_PROMOTION_NAME_LENGTH),
    description: z
      .string()
      .trim()
      .max(MAXIMUM_PROMOTION_DESCRIPTION_LENGTH)
      .optional(),
    promotionTypeId: z.coerce.number().int().positive(),
    startTime: z.coerce.date().optional(),
    endTime: z.coerce.date().optional(),
    isPermanent: z.boolean().optional().default(false),
    activeStatus: z.boolean().optional().default(true),
    createdBy: z.coerce.number().int().positive().optional(),
  })
  .refine((data) => data.isPermanent || (data.startTime && data.endTime), {
    message:
      'startTime and endTime are required when promotion is not permanent',
    path: ['startTime'],
  })
  .refine(
    (data) => !data.startTime || !data.endTime || data.startTime < data.endTime,
    {
      message: 'startTime must be before endTime',
      path: ['endTime'],
    },
  )
  .strict();
