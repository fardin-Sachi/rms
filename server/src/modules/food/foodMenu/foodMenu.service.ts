import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type FoodMenuDto from './dtos/foodMenu.dto.js';
import type UpdateFoodMenuDto from './dtos/updateFoodMenu.dto.js';
import type CreateFoodMenuDto from './dtos/createFoodMenu.dto.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type FoodMenuEntity from './entities/foodMenu.entity.js';
import type FoodMenuMapper from './mappers/foodMenu.mapper.js';
import type FoodMenuRepository from './foodMenu.repository.js';

class FoodMenuService extends BaseService<
  FoodMenuDto,
  CreateFoodMenuDto,
  UpdateFoodMenuDto,
  FoodMenuEntity,
  number,
  FoodMenuRepository
> {
  constructor(
    mLogger: ILogger,
    mRepository: FoodMenuRepository,
    mMapper: FoodMenuMapper,
  ) {
    super(mLogger, mRepository, mMapper);
  }
}

export default FoodMenuService;
