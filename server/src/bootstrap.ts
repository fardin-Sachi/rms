import ENV from './configs/index.config.js';
import {
  closeRedisClient,
  getRedisClient,
} from './infrastructures/cache/providers/redis/redis.client.js';
import { disconnectDatabase } from './infrastructures/database/dbConnection.js';
import { logger } from './infrastructures/logger/logger.js';

export async function bootstrap() {
  if (ENV.inMemoryDbEnv.CACHE_DRIVER === 'redis') {
    try {
      await getRedisClient();
    } catch (error) {
      logger.error('Failed to connect Redis', {
        error,
      });

      throw error;
    }
  }

  logger.info('Infrastructure initialized');
}

export async function shutdown(): Promise<void> {
  await Promise.allSettled([closeRedisClient(), disconnectDatabase()]);

  logger.info('Infrastructure shutdown');
}
