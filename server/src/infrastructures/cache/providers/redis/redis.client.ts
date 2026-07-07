import { createClient, type RedisClientType } from 'redis';
import ENV from '../../../../configs/index.config.js';
import { logger } from '../../../logger/logger.js';

// export const redisClient = createClient({
//   url: process.env.CACHE_DRIVER_URL,
// });

// redisClient.on('error', function (err: unknown) {
//   throw err;
// });

let client: RedisClientType | null = null;
let connecting: Promise<RedisClientType> | null = null;
export async function getRedisClient(): Promise<RedisClientType> {
  if (client?.isReady) {
    return client;
  }

  if (connecting) {
    return connecting;
  }

  client = createClient({
    url: ENV.inMemoryDbEnv.CACHE_DRIVER_URL,
    socket: {
      reconnectStrategy(retries: number) {
        return Math.min(retries * 100, 3000);
      },
      connectTimeout: 5000,
    },
  });

  client.on('error', (error: unknown) => {
    logger.error('Redis error', { error });
  });

  client.on('connect', () => {
    logger.info('Redis connected');
  });

  client.on('reconnecting', () => {
    logger.warn('Redis reconnecting');
  });

  client.on('end', () => {
    logger.info('Redis connection ended');
  });

  connecting = (async () => {
    try {
      if (!client) {
        throw new Error('Redis client not initialized');
      }

      await client.connect();

      return client!;
    } catch (error) {
      client = null;
      throw error;
    } finally {
      connecting = null;
    }
  })();

  return connecting;
}

export async function closeRedisClient(): Promise<void> {
  if (!client) return;

  try {
    await Promise.race([
      client.quit(),

      new Promise((_, reject) =>
        setTimeout(
          () => reject(),

          3000,
        ),
      ),
    ]);
  } catch {
    client.destroy();
  } finally {
    client = null;
  }
}
