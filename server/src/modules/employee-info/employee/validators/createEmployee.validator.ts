import { z } from 'zod';
import {
  MAXIMUM_EMPLOYEE_CONTACT_LENGTH,
  MAXIMUM_EMPLOYEE_NAME_LENGTH,
  MAXIMUM_EMPLOYEE_NID_LENGTH,
  MINIMUM_EMPLOYEE_CONTACT_LENGTH,
  MINIMUM_EMPLOYEE_NAME_LENGTH,
  MINIMUM_EMPLOYEE_NID_LENGTH,
} from '../employee.constants.js';
import ENV from '../../../../configs/index.config.js';

export const createEmployeeValidator = z
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
      }),

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
      }),

    email: z
      .email({ error: 'Please provide a valid email address' })
      .optional(),

    sex: z
      .string()
      .transform((val) => val.toUpperCase())
      .pipe(
        z.enum(['MALE', 'FEMALE', 'OTHER'], {
          error: 'Sex must be male, female, or other',
        }),
      )
      .optional(),

    joiningDate: z.coerce.date({ error: 'Joining date must be a valid date' }),

    endDate: z.coerce
      .date({ error: 'End date must be a valid date' })
      .optional(),

    nidNumber: z
      .string({ error: 'NID number must be a string' })
      .min(MINIMUM_EMPLOYEE_NID_LENGTH, {
        error: `NID number must be at least ${MINIMUM_EMPLOYEE_NID_LENGTH} characters long`,
      })
      .max(MAXIMUM_EMPLOYEE_NID_LENGTH, {
        error:
          ENV.serverEnv.NODE_ENV === 'production'
            ? `Too much characters`
            : `NID number cannot exceed ${MAXIMUM_EMPLOYEE_NID_LENGTH} characters`,
      })
      .optional(),

    imageUrl: z.url({ error: 'Image URL must be a valid URL' }).optional(),

    onVacation: z
      .boolean({ error: 'On vacation field must be true or false' })
      .optional(),

    activeStatus: z.boolean({ error: 'Active status must be true or false' }),
  })
  .strict();
