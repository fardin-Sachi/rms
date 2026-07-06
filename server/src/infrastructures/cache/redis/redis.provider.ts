import type { CacheProvider } from '../cache.interface.js';
import { getRedisClient } from './redis.client.js';

export class RedisProvider implements CacheProvider {
  async get<T>(key: string): Promise<T | null> {
    const client = await getRedisClient();
    const value = await client.get(key);

    if (value === null) {
      return null;
    }

    try {
      return JSON.parse(value) as T;
    } catch {
      return value as unknown as T;
    }
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    const client = await getRedisClient();

    const serialized = JSON.stringify(value);
    if (ttl !== undefined) {
      await client.set(key, serialized, {
        EX: ttl,
      });
    } else {
      await client.set(key, serialized);
    }
  }

  async del(key: string): Promise<void> {
    const client = await getRedisClient();
    await client.del(key);
  }

  async exists(key: string): Promise<boolean> {
    const client = await getRedisClient();
    return (await client.exists(key)) === 1;
  }

  async clear(): Promise<void> {
    const client = await getRedisClient();
    await client.flushDb();
  }

  async ttl(key: string): Promise<number> {
    const client = await getRedisClient();
    return client.ttl(key);
  }

  async expire(key: string, seconds: number): Promise<boolean> {
    const client = await getRedisClient();
    return await client.expire(key, seconds);
  }

  async increment(key: string, by?: number): Promise<number> {
    const client = await getRedisClient();
    return client.incrBy(key, by ?? 1);
  }

  async decrement(key: string, by?: number): Promise<number> {
    const client = await getRedisClient();
    return client.decrBy(key, by ?? 1);
  }

  async keys(pattern = '*'): Promise<string[]> {
    const client = await getRedisClient();

    const keys: string[] = [];

    for await (const key of client.scanIterator({
      MATCH: pattern,
    })) {
      keys.push(key);
    }

    return keys;
  }
}
