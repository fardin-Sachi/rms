import type IRepository from '../../../../shared/interfaces/repository.interface.js';
import type { CreatePromotionDto } from './dtos/createPromotion.dto.js';
import type { PromotionDto } from './dtos/promotion.dto.js';
import type { UpdatePromotionDto } from './dtos/updatePromotion.dto.js';

class PromotionRepository implements IRepository<
  PromotionDto,
  CreatePromotionDto,
  UpdatePromotionDto,
  number
> {
  async get(_id: number): Promise<PromotionDto | null> {
    return null;
  }

  async getAll(): Promise<PromotionDto[]> {
    return [];
  }

  async create(pMutable: CreatePromotionDto): Promise<PromotionDto> {
    return {
      id: 1,
      ...pMutable,
      activeStatus: pMutable.activeStatus ?? true,
      isPermanent: pMutable.isPermanent ?? true,
    };
  }

  async createMany(
    _pMutableList: CreatePromotionDto[],
  ): Promise<PromotionDto[]> {
    return [];
  }

  async update(pMutable: UpdatePromotionDto): Promise<PromotionDto> {
    return {
      id: pMutable.id,
      name: pMutable.name ?? 'Food Promotion',
      activeStatus: true,
      promotionTypeId: pMutable.promotionTypeId ?? 1,
      isPermanent: pMutable.isPermanent ?? false,
    };
  }

  async updateMany(
    _pMutableList: UpdatePromotionDto[],
  ): Promise<PromotionDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default PromotionRepository;
