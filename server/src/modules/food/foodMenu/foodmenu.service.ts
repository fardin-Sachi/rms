import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type FoodMenuDto from './dtos/foodMenu.dto.js';
import type UpdateFoodMenuDto from './dtos/updateFoodMenu.dto.js';
import type CreateFoodMenuDto from './dtos/createFoodMenu.dto.js';
import FoodMenuRepository from './foodmenu.repository.js';

class FoodMenuService {
  private readonly foodMenuRepository: FoodMenuRepository;

  constructor(private readonly logger: ILogger) {
    this.foodMenuRepository = new FoodMenuRepository();
  }

  async get(id: number): Promise<FoodMenuDto | null> {
    return this.foodMenuRepository.get(id);
  }

  async getAll(): Promise<FoodMenuDto[]> {
    return this.foodMenuRepository.getAll();
  }

  async create(pMutable: CreateFoodMenuDto): Promise<FoodMenuDto> {
    return this.foodMenuRepository.create(pMutable);
  }

  async createMany(pMutableList: CreateFoodMenuDto[]): Promise<FoodMenuDto[]> {
    return this.foodMenuRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdateFoodMenuDto): Promise<FoodMenuDto> {
    return this.foodMenuRepository.update(pMutable);
  }

  async updateMany(pMutableList: UpdateFoodMenuDto[]): Promise<FoodMenuDto[]> {
    return this.foodMenuRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.foodMenuRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.foodMenuRepository.deleteMany(ids);
  }
}

export default FoodMenuService;
