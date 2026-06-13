import { z } from 'zod';

export const deleteBuyXGetYRuleArraySchema = z.array(
  z.coerce
    .number({ error: 'Buy X Get Y Rule ID must be a number' })
    .int({ error: 'Buy X Get Y Rule ID must be an integer' })
    .positive({ error: 'Buy X Get Y Rule ID must be a positive number' }),
);
