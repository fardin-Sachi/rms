import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { CreateDiscountRuleDto } from './dtos/createDiscountRule.dto.js';
import type { UpdateDiscountRuleDto } from './dtos/updateDiscountRule.dto.js';
import DiscountRuleRepository from './discountRule.repository.js';
import type { DiscountRuleDto } from './dtos/discountRule.dto.js';
import BaseService from '../../../../shared/abstractions/base.service.js';
import type DiscountRuleEntity from './entities/discountRule.entity.js';
import type DiscountRuleMapper from './mappers/discountRule.mapper.js';
import type { ICache } from '../../../../infrastructures/cache/cache.interface.js';

class DiscountRuleService extends BaseService<
  DiscountRuleDto,
  CreateDiscountRuleDto,
  UpdateDiscountRuleDto,
  DiscountRuleEntity,
  number,
  DiscountRuleRepository
> {
  constructor(
    mLogger: ILogger,
    mCache: ICache,
    mRepository: DiscountRuleRepository,
    mMapper: DiscountRuleMapper,
  ) {
    super(mLogger, mCache, mRepository, mMapper);
  }
}

export default DiscountRuleService;
