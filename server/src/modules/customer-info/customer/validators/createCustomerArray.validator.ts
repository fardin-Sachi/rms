import { z } from 'zod';
import { createCustomerValidator } from './createCustomer.validator.js';

export const createCustomerArrayValidator = z.array(createCustomerValidator);
