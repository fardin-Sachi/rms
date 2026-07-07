import type { RedisClientType } from 'redis';
import type { CacheProvider } from '../../cache.interface.js';
import type { Serializer } from '../../serializer.interface.js';

export class RedisProvider implements CacheProvider {
  constructor(
    private readonly client: RedisClientType,
    private readonly serializer: Serializer,
  ) {}

  async get<T>(key: string): Promise<T | null> {
    const value = await this.client.get(key);

    if (value === null) {
      return null;
    }

    try {
      return this.serializer.deserialize<T>(value);
    } catch {
      return value as unknown as T;
    }
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    const serialized = this.serializer.serialize(value);
    if (ttl) {
      await this.client.set(key, serialized, { EX: ttl });

      return;
    }

    await this.client.set(key, serialized);
  }

  async del(key: string): Promise<void> {
    await this.client.del(key);
  }

  async exists(key: string): Promise<boolean> {
    return (await this.client.exists(key)) === 1;
  }

  async clear(): Promise<void> {
    await this.client.flushDb();
  }

  async ttl(key: string): Promise<number> {
    return this.client.ttl(key);
  }

  async expire(key: string, seconds: number): Promise<boolean> {
    return (await this.client.expire(key, seconds)) === 1;
  }

  async increment(key: string, by?: number): Promise<number> {
    return this.client.incrBy(key, by ?? 1);
  }

  async decrement(key: string, by?: number): Promise<number> {
    return this.client.decrBy(key, by ?? 1);
  }

  async keys(pattern = '*'): Promise<string[]> {
    const keys: string[] = [];

    for await (const batch of this.client.scanIterator({
      MATCH: pattern,
    })) {
      keys.push(...batch);
    }

    return keys;
  }
}
