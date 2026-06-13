import { z } from 'zod';
import { createCustomerSchema } from './createCustomer.validator.js';

export const createCustomerArraySchema = z.array(createCustomerSchema);
