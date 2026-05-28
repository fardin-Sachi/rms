import type IRepository from '../../shared/interfaces/repository.interface.js';
import type FoodMenuDto from './dtos/foodMenu.dto.js';
import type CreateFoodMenuDto from './dtos/createFoodMenu.dto.js';
import type UpdateFoodMenuDto from './dtos/updateFoodMenu.dto.js';

class FoodMenuRepository implements IRepository<
  FoodMenuDto,
  CreateFoodMenuDto,
  UpdateFoodMenuDto,
  number
> {
  async get(_id: number): Promise<FoodMenuDto | null> {
    return null;
  }

  async getAll(): Promise<FoodMenuDto[]> {
    return [];
  }

  async create(pMutable: CreateFoodMenuDto): Promise<FoodMenuDto> {
    return {
      id: 1,
      ...pMutable,
    };
  }

  async createMany(_pMutableList: CreateFoodMenuDto[]): Promise<FoodMenuDto[]> {
    return [];
  }

  async update(pMutable: UpdateFoodMenuDto): Promise<FoodMenuDto> {
    return {
      ...pMutable,
      name: pMutable.name ?? 'Pasta Basta',
      activeStatus: pMutable.activeStatus ?? true,
    };
  }

  async updateMany(_pMutableList: UpdateFoodMenuDto[]): Promise<FoodMenuDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default FoodMenuRepository;
