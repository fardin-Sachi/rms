import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { AssignPromotionFoodDto } from './dtos/assignPromotionFood.dto.js';
import PromotionFoodEntity from '../shared/enums/promotionType.enum.js';
import type { RemovePromotionFoodDto } from './dtos/removePromotionFood.dto.js';
import PromotionRepository from '../promotion/promotion.repository.js';
import PromotionFoodRepository from './promotionFood.repository.js';

class PromotionFoodService {
  private readonly promotionRepository: PromotionRepository;
  private readonly promotionFoodRepository: PromotionFoodRepository;

  constructor(private readonly logger: ILogger) {
    this.promotionFoodRepository = new PromotionFoodRepository();
    this.promotionRepository = new PromotionRepository();
  }

  async assign(pMutable: AssignPromotionFoodDto): Promise<PromotionFoodEntity> {
    return this.promotionFoodRepository.create(pMutable);
  }

  async getAll(): Promise<PromotionFoodEntity[]> {
    return this.promotionFoodRepository.getAll();
  }

  async getByPromotionId(promotionId: number): Promise<PromotionFoodEntity[]> {
    return this.promotionFoodRepository.getByPromotionId(promotionId);
  }

  async remove(pMutable: RemovePromotionFoodDto): Promise<void> {
    this.promotionFoodRepository.delete(
      pMutable.promotionId,
      pMutable.foodMenuId,
    );
  }
}

export default PromotionFoodService;
