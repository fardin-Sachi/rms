import type { ICache } from '../../../../infrastructures/cache/cache.interface.js';
import BaseService from '../../../../shared/abstractions/base.service.js';
import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { CreatePromotionDto } from './dtos/createPromotion.dto.js';
import type { PromotionDto } from './dtos/promotion.dto.js';
import type { UpdatePromotionDto } from './dtos/updatePromotion.dto.js';
import type PromotionEntity from './entities/promotion.entity.js';
import type PromotionMapper from './mappers/promotion.mapper.js';
import PromotionRepository from './promotion.repository.js';

class PromotionService extends BaseService<
  PromotionDto,
  CreatePromotionDto,
  UpdatePromotionDto,
  PromotionEntity,
  number,
  PromotionRepository
> {
  constructor(
    mLogger: ILogger,
    mCache: ICache,
    mRepository: PromotionRepository,
    mMapper: PromotionMapper,
  ) {
    super(mLogger, mCache, mRepository, mMapper);
  }
}

export default PromotionService;
