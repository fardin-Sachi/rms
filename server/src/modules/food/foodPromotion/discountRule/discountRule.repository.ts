import type IRepository from '../../../../shared/interfaces/repository.interface.js';
import type { CreateDiscountRuleDto } from './dtos/createDiscountRule.dto.js';
import type { DiscountRuleDto } from './dtos/discountRule.dto.js';
import type { UpdateDiscountRuleDto } from './dtos/updateDiscountRule.dto.js';

class DiscountRuleRepository implements IRepository<
  DiscountRuleDto,
  CreateDiscountRuleDto,
  UpdateDiscountRuleDto,
  number
> {
  async get(_id: number): Promise<DiscountRuleDto | null> {
    return null;
  }

  async getAll(): Promise<DiscountRuleDto[]> {
    return [];
  }

  async create(pMutable: CreateDiscountRuleDto): Promise<DiscountRuleDto> {
    return {
      id: 1,
      ...pMutable,
    };
  }

  async createMany(
    _pMutableList: CreateDiscountRuleDto[],
  ): Promise<DiscountRuleDto[]> {
    return [];
  }

  async update(pMutable: UpdateDiscountRuleDto): Promise<DiscountRuleDto> {
    return {
      id: pMutable.id,
      promotionId: pMutable.id,
      discountTypeId: pMutable.discountTypeId ?? 1,
      discountValue: pMutable.discountValue ?? 1,
    };
  }

  async updateMany(
    _pMutableList: UpdateDiscountRuleDto[],
  ): Promise<DiscountRuleDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default DiscountRuleRepository;
