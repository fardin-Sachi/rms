export default interface IRepository<TEntity, TId = number> {
  get(id: TId): Promise<TEntity | null>;

  getAll(): Promise<TEntity[]>;

  create(pMutable: TEntity): Promise<TEntity>;

  createMany(pMutableList: TEntity[]): Promise<TEntity[]>; //returns IDs of the created data

  update(pMutable: TEntity): Promise<TEntity>;

  updateMany(pMutableList: TEntity[]): Promise<TEntity[]>;

  delete(id: TId): Promise<void>;

  deleteMany(ids: TId[]): Promise<void>; //returns IDs of the deleted data
}
