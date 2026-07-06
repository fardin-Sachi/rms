export interface CacheProvider {
  get<T>(key: string): Promise<T | null>;

  set<T>(key: string, value: T, ttl?: number): Promise<void>;

  del(key: string): Promise<void>;

  exists(key: string): Promise<boolean>;

  clear(): Promise<void>;

  ttl(key: string): Promise<number>;

  expire(key: string, seconds: number): Promise<boolean>;

  increment(key: string, by?: number): Promise<number>;

  decrement(key: string, by?: number): Promise<number>;

  keys(pattern?: string): Promise<string[]>;
}
