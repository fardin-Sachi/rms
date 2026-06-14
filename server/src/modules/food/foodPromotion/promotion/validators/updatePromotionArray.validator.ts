import { z } from 'zod';
import ENV from '../../../../../configs/index.config.js';
import {
  MAXIMUM_PROMOTION_DESCRIPTION_LENGTH,
  MAXIMUM_PROMOTION_NAME_LENGTH,
} from '../promotion.constants.js';

export const updatePromotionArrayValidator = z.array(
  z.object({
    id: z.coerce
      .number({ error: 'Promotion ID must be a number' })
      .int({ error: 'Promotion ID must be an integer' })
      .positive({ error: 'Promotion ID must be a positive number' }),

    name: z
      .string({ error: 'Name must be a string' })
      .max(MAXIMUM_PROMOTION_NAME_LENGTH, {
        error:
          ENV.serverEnv.NODE_ENV === 'production'
            ? `Too much characters`
            : `Name cannot exceed ${MAXIMUM_PROMOTION_NAME_LENGTH} characters`,
      })
      .optional(),

    description: z
      .string()
      .trim()
      .max(MAXIMUM_PROMOTION_DESCRIPTION_LENGTH, {
        error:
          ENV.serverEnv.NODE_ENV === 'production'
            ? `Too much characters`
            : `Description cannot exceed ${MAXIMUM_PROMOTION_NAME_LENGTH} characters`,
      })
      .optional(),

    promotionTypeId: z.coerce.number().int().positive().optional(),
    startTime: z.coerce.date().nullable().optional(),
    endTime: z.coerce.date().nullable().optional(),
    isPermanent: z.boolean().optional(),
    activeStatus: z.boolean().optional(),
    updatedBy: z.coerce.number().int().positive().optional(),
  }),
);
