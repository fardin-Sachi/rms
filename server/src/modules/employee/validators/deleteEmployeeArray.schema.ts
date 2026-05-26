import { z } from 'zod';

export const deleteEmployeeArraySchema = z.array(
  z.coerce
    .number({ error: 'Employee ID must be a number' })
    .int({ error: 'Employee ID must be an integer' })
    .positive({ error: 'Employee ID must be a positive number' }),
);
