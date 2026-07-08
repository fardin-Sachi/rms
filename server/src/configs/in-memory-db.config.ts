import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const inMemoryDbEnvSchema = z.object({
  CACHE_DRIVER: z.string(),
  CACHE_DRIVER_URL: z.string(),
  CACHE_DEFAULT_TTL: z.coerce.number().optional(),
});

const inMemoryDbParsed = inMemoryDbEnvSchema.safeParse(process.env);

if (!inMemoryDbParsed.success) {
  // logger.error(
  //   'Invalid Server environment variables: ',
  //   inMemoryDbParsed.error.flatten().fieldErrors,
  // );
  // eslint-disable-next-line no-console
  console.error(
    `Invalid Server environment variables: ${inMemoryDbParsed.error.flatten().fieldErrors}`,
  );

  process.exit(1);
}

export const inMemoryDbEnv = inMemoryDbParsed.data;
