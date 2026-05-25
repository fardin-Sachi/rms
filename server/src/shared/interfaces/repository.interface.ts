export default interface IRepository<
    Entity,
    CreateDto,
    UpdateDto,
    ID = number
>{
    get(id: ID): Promise<Entity | null>;

    getAll(): Promise<Entity[]>;

    create(pMutable: CreateDto): Promise<Entity>;

    createMany(pMutableList: CreateDto[]): Promise<Entity[]>; //returns IDs of the created data

    update(pMutable: UpdateDto): Promise<Entity>;

    updateMany(pMutableList: UpdateDto[]): Promise<Entity[]>;

    delete(id: ID): Promise<ID>;

    deleteMany(ids: ID[]): Promise<ID[]>; //returns IDs of the deleted data
}