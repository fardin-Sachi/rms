import { z } from 'zod';

export const deleteEmployeeArraySchema = z.array(
  z.coerce.number().int().positive(),
);
