import ENV from '../../configs/index.config.js';
import type { CacheProvider } from './cache.interface.js';
import { JsonSerializer } from './json.serializer.js';
import { MemoryProvider } from './providers/memory/memory.provider.js';
import { getRedisClient } from './providers/redis/redis.client.js';
import { RedisProvider } from './providers/redis/redis.provider.js';

export async function createCacheProvider(): Promise<CacheProvider> {
  const serializer = new JsonSerializer();

  switch (ENV.inMemoryDbEnv.CACHE_DRIVER) {
    case 'redis': {
      const client = await getRedisClient();
      return new RedisProvider(client, serializer);
    }

    // case "memcached":
    //     return new MemcachedProvider();

    default:
      return new MemoryProvider();
  }
}
