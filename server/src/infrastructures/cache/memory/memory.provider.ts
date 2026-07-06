import type { CacheProvider } from '../cache.interface.js';

export class MemoryProvider implements CacheProvider {
    async get<T>(_key: string): Promise<T | null> {
        return null;
    }

    async set<T>(
        _key: string,
        _value: T,
        _ttl?: number,
    ): Promise<void> {
        return;
    }

    async del(_key: string): Promise<void> {
        return;
    }

    async exists(_key: string): Promise<boolean> {
        return false;
    }

    async clear(): Promise<void> {
        return;
    }

    ttl(_key: string): Promise<number> {
      throw new Error('Method not implemented.');
    }

    expire(_key: string, _seconds: number): Promise<boolean> {
      throw new Error('Method not implemented.');
    }

    increment(_key: string, _by?: number): Promise<number> {
      throw new Error('Method not implemented.');
    }

    decrement(_key: string, _by?: number): Promise<number> {
      throw new Error('Method not implemented.');
    }

    keys(_pattern?: string): Promise<string[]> {
      throw new Error('Method not implemented.');
    }
}