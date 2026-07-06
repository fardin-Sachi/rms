import { z } from 'zod';

export const updateEmpSalaryValidator = z
  .object({
    salaryAmount: z.coerce
      .number({ error: 'Salary amount must be a number' })
      .int({ error: 'Salary amount must be an integer' })
      .positive({ error: 'Employee ID must be a positive number' })
      .optional(),

    salaryStartDate: z.coerce
      .date({ error: 'Salary start date must be a valid date' })
      .optional(),

    salaryEndDate: z.coerce
      .date({ error: 'Salary end date must be a valid date' })
      .optional(),

    activeStatus: z
      .boolean({ error: 'Active status must be true or false' })
      .optional(),
  })
  .strict();
