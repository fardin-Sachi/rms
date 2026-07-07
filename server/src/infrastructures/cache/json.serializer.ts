import type { Serializer } from './serializer.interface.js';

export class JsonSerializer implements Serializer {
  serialize<T>(value: T): string {
    return JSON.stringify(value);
  }

  deserialize<T>(value: string): T {
    return JSON.parse(value);
  }
}
