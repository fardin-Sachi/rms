import { z } from 'zod';
import ENV from '../../../../configs/index.config.js';
import {
  MAXIMUM_FOOD_MENU_DESCRIPTION_LENGTH,
  MAXIMUM_FOOD_MENU_NAME_LENGTH,
  MINIMUM_FOOD_MENU_DESCRIPTION_LENGTH,
  MINIMUM_FOOD_MENU_NAME_LENGTH,
} from '../foodMenu.constants.js';

export const updateFoodMenuSchema = z
  .object({
    name: z
      .string({ error: 'Name must be a string' })
      .min(MINIMUM_FOOD_MENU_NAME_LENGTH, {
        error: `Name must be at least ${MINIMUM_FOOD_MENU_NAME_LENGTH} characters long`,
      })
      .max(MAXIMUM_FOOD_MENU_NAME_LENGTH, {
        error:
          ENV.serverEnv.NODE_ENV === 'production'
            ? `Too much characters`
            : `Name cannot exceed ${MAXIMUM_FOOD_MENU_NAME_LENGTH} characters`,
      })
      .optional(),

    description: z
      .string({ error: 'Description must be a string' })
      .min(MINIMUM_FOOD_MENU_DESCRIPTION_LENGTH, {
        error: `Description must be at least ${MINIMUM_FOOD_MENU_DESCRIPTION_LENGTH} characters long`,
      })
      .max(MAXIMUM_FOOD_MENU_DESCRIPTION_LENGTH, {
        error:
          ENV.serverEnv.NODE_ENV === 'production'
            ? `Too much characters`
            : `Description cannot exceed ${MAXIMUM_FOOD_MENU_DESCRIPTION_LENGTH} characters`,
      })
      .optional(),

    imageUrl: z.url({ error: 'Image URL must be a URL' }).optional(),

    price: z.coerce
      .number({ error: 'Price must be a positive' })
      .positive({ error: 'Price must be a positive' })
      .optional(),

    preparationTime: z.coerce
      .number({ error: 'Preparation time must be a number in minutes' })
      .positive({ error: 'Preparation time cannot be less than zero' })
      .optional(),

    activeStatus: z
      .boolean({ error: 'Active status must be true or false' })
      .optional(),
  })
  .strict();
