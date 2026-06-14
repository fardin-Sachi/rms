import { z } from 'zod';
import { createEmployeeValidator } from './createEmployee.validator.js';

export const createEmployeeArrayValidator = z.array(createEmployeeValidator);
