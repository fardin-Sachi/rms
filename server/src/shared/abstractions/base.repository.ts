import type { ILogger } from '../interfaces/logger.interface.js';

abstract class BaseRepository {
  constructor(protected readonly mLogger: ILogger) {}

  protected logQuery(query: string): void {
    this.mLogger.debug(query);
  }

  protected logError(error: Error): void {
    this.mLogger.error(error.message);
  }
}

export default BaseRepository;
