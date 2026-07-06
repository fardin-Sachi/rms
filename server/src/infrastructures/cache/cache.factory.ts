import ENV from '../../configs/index.config.js';
import type { CacheProvider } from './cache.interface.js';
import { MemoryProvider } from './memory/memory.provider.js';
import { RedisProvider } from './redis/redis.provider.js';

export function createCacheProvider(): CacheProvider {

    switch(ENV.inMemoryDbEnv.CACHE_DRIVER_URL){

        case "redis":
            return new RedisProvider();

        // case "memcached":
        //     return new MemcachedProvider();

        default:
            return new MemoryProvider();
    }

}