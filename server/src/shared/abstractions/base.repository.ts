import type { Database } from '../../infrastructures/database/index.database.js';
import type { ILogger } from '../interfaces/logger.interface.js';
import type IRepository from '../interfaces/repository.interface.js';

abstract class BaseRepository<TEntity, TId = number> implements IRepository<
  TEntity,
  TId
> {
  constructor(
    protected readonly db: Database,
    protected readonly logger: ILogger,
  ) {}

  protected logQuery(query: string): void {
    this.logger.debug(query);
  }

  protected logError(error: unknown): void {
    this.logger.error(error instanceof Error ? error.message : String(error));
  }

  abstract get(id: TId): Promise<TEntity | null>;

  abstract getAll(): Promise<TEntity[]>;

  abstract create(entity: TEntity): Promise<TEntity>;

  abstract createMany(entities: TEntity[]): Promise<TEntity[]>;

  abstract update(entity: TEntity): Promise<TEntity>;

  abstract updateMany(entities: TEntity[]): Promise<TEntity[]>;

  abstract delete(id: TId): Promise<void>;

  abstract deleteMany(ids: TId[]): Promise<void>;
}

export default BaseRepository;
