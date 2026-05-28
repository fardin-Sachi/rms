import { z } from 'zod';
import { createFoodMenuSchema } from './createFoodMenu.validator.js';

export const createFoodMenuArraySchema = z.array(createFoodMenuSchema);
