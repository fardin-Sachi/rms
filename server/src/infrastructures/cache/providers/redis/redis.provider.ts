import type { RedisClientType } from 'redis';
import type { ICache } from '../../cache.interface.js';
import { getRedisClient } from './redis.client.js';
import { logger } from '../../../logger/logger.js';

export class RedisCache implements ICache {
  private async getClient(): Promise<RedisClientType> {
    return getRedisClient();
  }

  async get<T>(key: string): Promise<T | null> {
    const client = await this.getClient();

    const value = await client.get(key);

    if (!value) {
      return null;
    }

    try {
      return JSON.parse(value) as T;
    } catch (error) {
      logger.error('Failed to parse cached value', {
        key,
        error,
      });

      return null;
    }
  }

  async set<T>(key: string, value: T, ttlSeconds?: number): Promise<void> {
    const client = await this.getClient();

    const json = JSON.stringify(value);

    if (ttlSeconds !== undefined) {
      await client.set(key, json, {
        EX: ttlSeconds,
      });

      return;
    }

    await client.set(key, json);
  }

  async delete(key: string): Promise<void> {
    const client = await this.getClient();

    await client.del(key);
  }

  async clear(): Promise<void> {
    const client = await this.getClient();

    await client.flushDb();
  }

  async has(key: string): Promise<boolean> {
    const client = await this.getClient();

    return (await client.exists(key)) === 1;
  }

  async deleteMany(keys: string[]): Promise<void> {
    if (keys.length === 0) {
      return;
    }

    const client = await this.getClient();

    await client.del(keys);
  }
}
