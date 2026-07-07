import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import RestaurantTableRepository from './restaurantTable.repository.js';
import type { RestaurantTableDto } from './dtos/restaurantTable.dto.js';
import type { CreateRestaurantTableDto } from './dtos/createRestaurantTable.dto.js';
import type { UpdateRestaurantTableDto } from './dtos/updateRestaurantTable.dto.js';
import type RestaurantTableEntity from './entities/restaurantTable.entities.js';
import type RestaurantTableMapper from './mappers/restaurantTable.mapper.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type { ICache } from '../../../infrastructures/cache/cache.interface.js';

class RestaurantTableService extends BaseService<
  RestaurantTableDto,
  CreateRestaurantTableDto,
  UpdateRestaurantTableDto,
  RestaurantTableEntity,
  number,
  RestaurantTableRepository
> {
  constructor(
    mLogger: ILogger,
    mCache: ICache,
    mRepository: RestaurantTableRepository,
    mMapper: RestaurantTableMapper,
  ) {
    super(mLogger, mCache, mRepository, mMapper);
  }
}

export default RestaurantTableService;
