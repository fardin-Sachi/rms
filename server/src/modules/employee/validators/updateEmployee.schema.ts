import { z } from 'zod';

export const updateEmployeeSchema = z.object({
  name: z.string().min(2).max(100).optional(),

  dob: z.coerce.date().optional(),

  contact: z.string().min(5).max(30).optional(),

  email: z.string().optional(),

  joiningDate: z.coerce.date().optional(),

  endDate: z.coerce.date().optional(),

  imageUrl: z.string().url().optional(),

  lastLogin: z.coerce.date().optional(),

  onVacation: z.boolean().optional(),

  activeStatus: z.boolean().optional(),
});
