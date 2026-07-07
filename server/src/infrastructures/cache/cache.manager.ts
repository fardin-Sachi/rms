import type { CacheProvider } from './cache.interface.js';

export class CacheManager {
  constructor(
    private readonly provider: CacheProvider,
    private readonly defaultTTL: number,
  ) {}

  async get<T>(key: string) {
    return this.provider.get<T>(key);
  }

  async set<T>(key: string, value: T, ttl?: number) {
    await this.provider.set(key, value, ttl ?? this.defaultTTL);
  }

  async del(key: string) {
    await this.provider.del(key);
  }

  async remember<T>(
    key: string,

    callback: () => Promise<T>,

    ttl?: number,
  ): Promise<T> {
    const cached = await this.get<T>(key);

    if (cached !== null) return cached;

    const value = await callback();

    await this.set(
      key,

      value,

      ttl,
    );

    return value;
  }
}
