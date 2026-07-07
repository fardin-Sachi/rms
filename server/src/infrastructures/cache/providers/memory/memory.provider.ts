import type { ICache } from '../../cache.interface.js';

type CacheItem = {
  value: unknown;
  expiresAt?: number;
};

export class MemoryCache implements ICache {
  private cache = new Map<string, CacheItem>();

  private readonly cleanupTimer: NodeJS.Timeout;

  constructor() {
    this.cleanupTimer = setInterval(() => {
      this.cleanupExpired();
    }, 60_000);

    this.cleanupTimer.unref();
  }

  private cleanupExpired(): void {
    for (const [key, item] of this.cache) {
      if (this.isExpired(item)) {
        this.cache.delete(key);
      }
    }
  }

  async get<T>(key: string): Promise<T | null> {
    const item = this.cache.get(key);

    if (!item) return null;

    if (this.isExpired(item)) {
      this.cache.delete(key);
      return null;
    }

    return item.value as T;
  }

  private isExpired(item: CacheItem): boolean {
    return item.expiresAt !== undefined && Date.now() >= item.expiresAt;
  }

  async set<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    const item: CacheItem = {
      value,
    };

    if (ttlSeconds !== undefined) {
      item.expiresAt = Date.now() + ttlSeconds * 1000;
    }

    this.cache.set(key, item);
  }

  async delete(key: string): Promise<void> {
    this.cache.delete(key);
  }

  async clear(): Promise<void> {
    this.cache.clear();
  }

  async has(key: string): Promise<boolean> {
    return (await this.get(key)) !== null;
  }

  async deleteMany(keys: string[]): Promise<void> {
    for (const key of keys) {
      this.cache.delete(key);
    }
  }
}
