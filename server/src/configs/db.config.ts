import { z } from 'zod';
import dotenv from 'dotenv';
import { logger } from '../shared/libs/logger.js';

dotenv.config();

const dbEnvSchema = z.object({
  DATABASE_URL: z.string(),
});

const dbParsed = dbEnvSchema.safeParse(process.env);

if (!dbParsed.success) {
  logger.info(
    'Invalid Database environment variables: ',
    dbParsed.error.flatten().fieldErrors,
  );
  process.exit(1);
}

export const dbEnv = dbParsed.data;
