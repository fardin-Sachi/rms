import { z } from 'zod';
import { createFoodMenuValidator } from './createFoodMenu.validator.js';

export const createFoodMenuArrayValidator = z.array(createFoodMenuValidator);
