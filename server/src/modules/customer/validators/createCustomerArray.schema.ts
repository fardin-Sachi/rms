import { z } from 'zod';
import { createCustomerSchema } from './createCustomer.schema.js';

export const createCustomerArraySchema = z.array(createCustomerSchema);
