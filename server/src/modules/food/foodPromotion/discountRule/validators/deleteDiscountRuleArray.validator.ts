import { z } from 'zod';

export const deleteDiscountRuleArraySchema = z.array(
  z.coerce
    .number({ error: 'Discount Rule ID must be a number' })
    .int({ error: 'Discount Rule ID must be an integer' })
    .positive({ error: 'Discount Rule ID must be a positive number' }),
);
