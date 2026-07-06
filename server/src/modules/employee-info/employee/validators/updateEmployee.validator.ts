import { z } from 'zod';
import {
  MAXIMUM_EMPLOYEE_CONTACT_LENGTH,
  MAXIMUM_EMPLOYEE_NAME_LENGTH,
  MINIMUM_EMPLOYEE_CONTACT_LENGTH,
  MINIMUM_EMPLOYEE_NAME_LENGTH,
} from '../employee.constants.js';
import ENV from '../../../../configs/index.config.js';

export const updateEmployeeValidator = z
  .object({
    name: z
      .string({ error: 'Name must be a string' })
      .min(MINIMUM_EMPLOYEE_NAME_LENGTH, {
        error: `Name must be at least ${MINIMUM_EMPLOYEE_NAME_LENGTH} characters long`,
      })
      .max(MAXIMUM_EMPLOYEE_NAME_LENGTH, {
        error:
          ENV.serverEnv.NODE_ENV === 'production'
            ? `Too much characters`
            : `Name cannot exceed ${MAXIMUM_EMPLOYEE_NAME_LENGTH} characters`,
      })
      .optional(),

    dob: z.coerce
      .date({ error: 'Date of birth must be a valid date' })
      .optional(),

    contact: z
      .string({ error: 'Contact must be a string' })
      .min(MINIMUM_EMPLOYEE_CONTACT_LENGTH, {
        error: `Contact must be at least ${MINIMUM_EMPLOYEE_CONTACT_LENGTH} characters long`,
      })
      .max(MAXIMUM_EMPLOYEE_CONTACT_LENGTH, {
        error:
          ENV.serverEnv.NODE_ENV === 'production'
            ? `Too much characters`
            : `Contact cannot exceed ${MAXIMUM_EMPLOYEE_CONTACT_LENGTH} characters`,
      })
      .optional(),

    email: z
      .email({ error: 'Please provide a valid email address' })
      .optional(),

    joiningDate: z.coerce
      .date({ error: 'Joining date must be a valid date' })
      .optional(),

    endDate: z.coerce
      .date({ error: 'End date must be a valid date' })
      .optional(),

    imageUrl: z.url({ error: 'Image URL must be a valid URL' }).optional(),

    lastLogin: z.coerce
      .date({ error: 'Last login must be a valid date' })
      .optional(),

    onVacation: z
      .boolean({ error: 'On vacation must be true or false' })
      .optional(),

    activeStatus: z
      .boolean({ error: 'Active status must be true or false' })
      .optional(),
  })
  .strict();
