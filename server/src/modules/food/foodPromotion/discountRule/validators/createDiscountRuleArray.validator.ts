import { z } from 'zod';
import { createDiscountRuleValidator } from './createDiscountRule.validator.js';

export const createDiscountRuleArrayValidator = z.array(
  createDiscountRuleValidator,
);
