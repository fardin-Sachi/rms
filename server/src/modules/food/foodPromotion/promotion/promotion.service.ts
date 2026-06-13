import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { CreatePromotionDto } from './dtos/createPromotion.dto.js';
import type { PromotionDto } from './dtos/promotion.dto.js';
import type { UpdatePromotionDto } from './dtos/updatePromotion.dto.js';
import PromotionRepository from './promotion.repository.js';

class PromotionService {
  private readonly promotionRepository: PromotionRepository;

  constructor(private readonly logger: ILogger) {
    this.promotionRepository = new PromotionRepository();
  }

  async get(id: number): Promise<PromotionDto | null> {
    return this.promotionRepository.get(id);
  }

  async getAll(): Promise<PromotionDto[]> {
    return this.promotionRepository.getAll();
  }

  async create(pMutable: CreatePromotionDto): Promise<PromotionDto> {
    return this.promotionRepository.create(pMutable);
  }

  async createMany(
    pMutableList: CreatePromotionDto[],
  ): Promise<PromotionDto[]> {
    return this.promotionRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdatePromotionDto): Promise<PromotionDto> {
    return this.promotionRepository.update(pMutable);
  }

  async updateMany(
    pMutableList: UpdatePromotionDto[],
  ): Promise<PromotionDto[]> {
    return this.promotionRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.promotionRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.promotionRepository.deleteMany(ids);
  }
}

export default PromotionService;
