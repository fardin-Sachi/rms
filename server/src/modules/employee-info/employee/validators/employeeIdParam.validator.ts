import { z } from 'zod';

export const employeeIdParamValidator = z
  .object({
    id: z.coerce
      .number({ error: 'Employee ID must be a number' })
      .int({ error: 'Employee ID must be an integer' })
      .positive({ error: 'Employee ID must be a positive number' }),
  })
  .strict();
