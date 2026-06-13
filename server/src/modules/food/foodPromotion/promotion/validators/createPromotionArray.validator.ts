import { z } from 'zod';
import { createPromotionValidator } from './createPromotion.validator.js';

export const createPromotionArrayValidator = z.array(createPromotionValidator);
