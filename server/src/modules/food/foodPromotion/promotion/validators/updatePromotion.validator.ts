import { z } from 'zod';
import {
  MAXIMUM_PROMOTION_DESCRIPTION_LENGTH,
  MAXIMUM_PROMOTION_NAME_LENGTH,
} from '../promotion.constants.js';

export const updatePromotionValidator = z
  .object({
    name: z
      .string()
      .trim()
      .min(1)
      .max(MAXIMUM_PROMOTION_NAME_LENGTH)
      .optional(),
    description: z
      .string()
      .trim()
      .max(MAXIMUM_PROMOTION_DESCRIPTION_LENGTH)
      .optional(),
    promotionTypeId: z.coerce.number().int().positive().optional(),
    startTime: z.coerce.date().nullable().optional(),
    endTime: z.coerce.date().nullable().optional(),
    isPermanent: z.boolean().optional(),
    activeStatus: z.boolean().optional(),
    updatedBy: z.coerce.number().int().positive().optional(),
  })
  .refine(
    (data) => !data.startTime || !data.endTime || data.startTime < data.endTime,
    {
      message: 'startTime must be before endTime',
      path: ['endTime'],
    },
  )
  .strict();
