import { z } from 'zod';

export const createEmployeeSchema = z.object({
  name: z.string().min(3).max(255),

  dob: z.coerce.date().optional(),

  contact: z.string().min(5).max(30),

  email: z.email().optional(),

  sex: z.enum(['male', 'female', 'other']),

  joiningDate: z.coerce.date(),

  endDate: z.coerce.date().optional(),

  nidNumber: z.string().min(5).max(30).optional(),

  imageUrl: z.string().url().optional(),

  onVacation: z.boolean().optional(),

  activeStatus: z.boolean(),
});
