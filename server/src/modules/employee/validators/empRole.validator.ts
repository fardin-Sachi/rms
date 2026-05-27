import { z } from 'zod';
import EmployeeRole from '../enums/employeeRole.enum.js';
import ENV from '../../../configs/index.config.js';

export const empRoleSchema = z
  .object({
    employeeRoleId: z.coerce
      .number({ error: 'Employee role ID must be a number' })
      .int({ error: 'Employee role ID must be an integer' })
      .positive({ error: 'Employee role ID must be a positive number' })
      .optional(),

    employeeRoleName: z
      .string({ error: 'Please provide a valid employee role' })
      .transform((val) => val.toUpperCase())
      .pipe(z.enum(EmployeeRole.names, {}))
      .optional(),
  })
  .refine(
    (data) =>
      data.employeeRoleId !== undefined || data.employeeRoleName !== undefined,
    ENV.serverEnv.NODE_ENV === 'production'
      ? {
          message: 'Employee role is required',
        }
      : {
          message: 'Either employee role ID or employee role name is required',
          path: ['employeeRoleId'],
        },
  )
  .strict();
