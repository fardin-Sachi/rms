import ENV from '../../configs/index.config.js';
import type { ICache } from './cache.interface.js';
import { MemoryCache } from './providers/memory/memory.provider.js';
import { RedisCache } from './providers/redis/redis.provider.js';

const cache: ICache =
  ENV.inMemoryDbEnv.CACHE_DRIVER === 'redis'
    ? new RedisCache()
    : new MemoryCache();

export default cache;
