import { z } from 'zod';
import dotenv from 'dotenv';
import { logger } from '../infrastructures/logger/logger.js';

dotenv.config();

const serverEnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z.coerce.number().int().default(8000),
});

const serverParsed = serverEnvSchema.safeParse(process.env);

if (!serverParsed.success) {
  logger.error(
    'Invalid Server environment variables: ',
    serverParsed.error.flatten().fieldErrors,
  );
  process.exit(1);
}

export const serverEnv = serverParsed.data;
