import type IRepository from '../../../../shared/interfaces/repository.interface.js';
import type { BuyXGetYRuleDto } from './dtos/buyXGetYRule.dto.js';
import type { CreateBuyXGetYRuleDto } from './dtos/createBuyXGetYRule.dto.js';
import type { UpdateBuyXGetYRuleDto } from './dtos/updateBuyXGetYRule.dto.js';

class BuyXGetYRuleRepository implements IRepository<
  BuyXGetYRuleDto,
  CreateBuyXGetYRuleDto,
  UpdateBuyXGetYRuleDto,
  number
> {
  async get(_id: number): Promise<BuyXGetYRuleDto | null> {
    return null;
  }

  async getAll(): Promise<BuyXGetYRuleDto[]> {
    return [];
  }

  async create(pMutable: CreateBuyXGetYRuleDto): Promise<BuyXGetYRuleDto> {
    return {
      ...pMutable,
    };
  }

  async createMany(
    _pMutableList: CreateBuyXGetYRuleDto[],
  ): Promise<BuyXGetYRuleDto[]> {
    return [];
  }

  async update(pMutable: UpdateBuyXGetYRuleDto): Promise<BuyXGetYRuleDto> {
    return {
      promotionId: pMutable.promotionId ?? 1,
      buyFoodId: pMutable.buyFoodId ?? 2,
      buyQuantity: pMutable.buyQuantity ?? 3,
      freeFoodId: pMutable.freeFoodId ?? 4,
      freeFoodQuantity: pMutable.freeFoodQuantity ?? 5,
    };
  }

  async updateMany(
    _pMutableList: UpdateBuyXGetYRuleDto[],
  ): Promise<BuyXGetYRuleDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default BuyXGetYRuleRepository;
