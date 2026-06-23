import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import RestaurantTableRepository from './restaurantTable.repository.js';
import type { RestaurantTableDto } from './dtos/restaurantTable.dto.js';
import type { CreateRestaurantTableDto } from './dtos/createRestaurantTable.dto.js';
import type { UpdateRestaurantTableDto } from './dtos/updateRestaurantTable.dto.js';

class RestaurantTableService {
  private readonly restaurantTableRepository: RestaurantTableRepository;

  constructor(private readonly logger: ILogger) {
    this.restaurantTableRepository = new RestaurantTableRepository();
  }

  async get(id: number): Promise<RestaurantTableDto | null> {
    return this.restaurantTableRepository.get(id);
  }

  async getAll(): Promise<RestaurantTableDto[]> {
    return this.restaurantTableRepository.getAll();
  }

  async create(
    pMutable: CreateRestaurantTableDto,
  ): Promise<RestaurantTableDto> {
    return this.restaurantTableRepository.create(pMutable);
  }

  async createMany(
    pMutableList: CreateRestaurantTableDto[],
  ): Promise<RestaurantTableDto[]> {
    return this.restaurantTableRepository.createMany(pMutableList);
  }

  async update(
    pMutable: UpdateRestaurantTableDto,
  ): Promise<RestaurantTableDto> {
    return this.restaurantTableRepository.update(pMutable);
  }

  async updateMany(
    pMutableList: UpdateRestaurantTableDto[],
  ): Promise<RestaurantTableDto[]> {
    return this.restaurantTableRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.restaurantTableRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.restaurantTableRepository.deleteMany(ids);
  }
}

export default RestaurantTableService;
