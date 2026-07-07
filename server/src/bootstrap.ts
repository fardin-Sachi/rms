import { initializeContainer } from './infrastructures/cache/initializeContainer.js';
import { closeRedisClient } from './infrastructures/cache/providers/redis/redis.client.js';
import {
  connectDatabase,
  disconnectDatabase,
} from './infrastructures/database/dbConnection.js';
import { logger } from './infrastructures/logger/logger.js';

let bootstrapped = false;
export async function bootstrap(): Promise<void> {
  if (bootstrapped) return;

  await Promise.all([connectDatabase(), initializeContainer()]);

  bootstrapped = true;

  logger.info('Infrastructure initialized');
}

export async function shutdown(): Promise<void> {
  await Promise.allSettled([closeRedisClient(), disconnectDatabase()]);

  logger.info('Infrastructure shutdown');
}
