import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import BuyXGetYRuleRepository from './BuyXGetYRule.repository.js';
import type { BuyXGetYRuleDto } from './dtos/buyXGetYRule.dto.js';
import type { CreateBuyXGetYRuleDto } from './dtos/createBuyXGetYRule.dto.js';
import type { UpdateBuyXGetYRuleDto } from './dtos/updateBuyXGetYRule.dto.js';

class BuyXGetYRuleService {
  private readonly buyXGetYRuleRepository: BuyXGetYRuleRepository;

  constructor(private readonly logger: ILogger) {
    this.buyXGetYRuleRepository = new BuyXGetYRuleRepository();
  }

  async get(id: number): Promise<BuyXGetYRuleDto | null> {
    return this.buyXGetYRuleRepository.get(id);
  }

  async getAll(): Promise<BuyXGetYRuleDto[]> {
    return this.buyXGetYRuleRepository.getAll();
  }

  async create(pMutable: CreateBuyXGetYRuleDto): Promise<BuyXGetYRuleDto> {
    return this.buyXGetYRuleRepository.create(pMutable);
  }

  async createMany(
    pMutableList: CreateBuyXGetYRuleDto[],
  ): Promise<BuyXGetYRuleDto[]> {
    return this.buyXGetYRuleRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdateBuyXGetYRuleDto): Promise<BuyXGetYRuleDto> {
    return this.buyXGetYRuleRepository.update(pMutable);
  }

  async updateMany(
    pMutableList: UpdateBuyXGetYRuleDto[],
  ): Promise<BuyXGetYRuleDto[]> {
    return this.buyXGetYRuleRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.buyXGetYRuleRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.buyXGetYRuleRepository.deleteMany(ids);
  }
}

export default BuyXGetYRuleService;
