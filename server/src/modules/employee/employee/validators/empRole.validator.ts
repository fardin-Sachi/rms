import { z } from 'zod';
import EmployeeRole from '../enums/employeeRole.enum.js';
import ENV from '../../../../configs/index.config.js';

export const empRoleSchema = z
  .object({
    employeeRoleId: z.coerce
      .number({ error: 'Employee role ID must be a number' })
      .int({ error: 'Employee role ID must be an integer' })
      .refine(
        (val: number): boolean => EmployeeRole.values.includes(val as never),
        {
          error: `Employee role ID must be one of: ${EmployeeRole.values.join(', ')}`,
        },
      )
      .optional(),

    employeeRoleName: z
      .string({ error: 'Please provide a valid employee role' })
      .transform((val: string): string => val.toUpperCase())
      .pipe(
        z.enum(EmployeeRole.names, {
          error: `Employee role name must be one of: ${EmployeeRole.names.join(', ')}`,
        }),
      )
      .optional(),
  })
  .refine(
    (data): boolean =>
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
