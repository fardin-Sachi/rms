import type IRepository from '../../../shared/interfaces/repository.interface.js';
import type { RestaurantTableDto } from './dtos/restaurantTable.dto.js';
import type { CreateRestaurantTableDto } from './dtos/createRestaurantTable.dto.js';
import type { UpdateRestaurantTableDto } from './dtos/updateRestaurantTable.dto.js';

class RestaurantTableRepository implements IRepository<
  RestaurantTableDto,
  CreateRestaurantTableDto,
  UpdateRestaurantTableDto,
  number
> {
  async get(_id: number): Promise<RestaurantTableDto | null> {
    return null;
  }

  async getAll(): Promise<RestaurantTableDto[]> {
    return [];
  }

  async create(
    pMutable: CreateRestaurantTableDto,
  ): Promise<RestaurantTableDto> {
    return {
      id: 1,
      ...pMutable,
    };
  }

  async createMany(
    _pMutableList: CreateRestaurantTableDto[],
  ): Promise<RestaurantTableDto[]> {
    return [];
  }

  async update(
    pMutable: UpdateRestaurantTableDto,
  ): Promise<RestaurantTableDto> {
    return {
      id: pMutable.id,
      capacity: pMutable.capacity ?? 5,
      tableNo: pMutable.tableNo ?? 'A-1',
    };
  }

  async updateMany(
    _pMutableList: UpdateRestaurantTableDto[],
  ): Promise<RestaurantTableDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default RestaurantTableRepository;
