import { z } from 'zod';
import { createEmployeeSchema } from './createEmployee.validator.js';

export const createEmployeeArraySchema = z.array(createEmployeeSchema);
