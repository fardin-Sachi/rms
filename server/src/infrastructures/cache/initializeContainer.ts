import ENV from '../../configs/index.config.js';
import { createCacheProvider } from './cache.factory.js';
import { CacheManager } from './cache.manager.js';
import { container } from './containter.js';

export async function initializeContainer() {
  const provider = await createCacheProvider();

  const cache = new CacheManager(
    provider,

    ENV.inMemoryDbEnv.CACHE_DEFAULT_TTL,
  );

  container.register(
    'CacheManager',

    cache,
  );
}
