import type { ICache } from '../../../../infrastructures/cache/cache.interface.js';
import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { AssignPromotionFoodDto } from './dtos/assignPromotionFood.dto.js';
import type { RemovePromotionFoodDto } from './dtos/removePromotionFood.dto.js';
import type PromotionFoodEntity from './entities/promotionFood.entity.js';
import type PromotionFoodMapper from './mappers/promotionFood.mapper.js';
import type PromotionFoodRepository from './promotionFood.repository.js';

class PromotionFoodService {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mCache: ICache,
    private readonly mRepository: PromotionFoodRepository,
    private readonly mMapper: PromotionFoodMapper,
  ) {}

  async assign(dto: AssignPromotionFoodDto): Promise<void> {
    const entities = this.mMapper.fromAssignDto(dto);

    await this.mRepository.createMany(entities);
  }

  async remove(dto: RemovePromotionFoodDto): Promise<void> {
    const entity = this.mMapper.fromRemoveDto(dto);

    await this.mRepository.delete({
      promotionId: entity.promotionId,
      foodMenuId: entity.foodMenuId,
    });
  }

  async getByPromotionId(promotionId: number): Promise<PromotionFoodEntity[]> {
    return this.mRepository.getByPromotionId(promotionId);
  }

  async replace(dto: AssignPromotionFoodDto): Promise<void> {
    await this.mRepository.deleteByPromotionId(dto.promotionId);

    const entities = this.mMapper.fromAssignDto(dto);

    if (entities.length > 0) {
      await this.mRepository.createMany(entities);
    }
  }
}

export default PromotionFoodService;
