import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { CreateDiscountRuleDto } from './dtos/createDiscountRule.dto.js';
import type { UpdateDiscountRuleDto } from './dtos/updateDiscountRule.dto.js';
import DiscountRuleRepository from './discountRule.repository.js';
import type { DiscountRuleDto } from './dtos/discountRule.dto.js';

class DiscountRuleService {
  private readonly discountRuleRepository: DiscountRuleRepository;

  constructor(private readonly logger: ILogger) {
    this.discountRuleRepository = new DiscountRuleRepository();
  }

  async get(id: number): Promise<DiscountRuleDto | null> {
    return this.discountRuleRepository.get(id);
  }

  async getAll(): Promise<DiscountRuleDto[]> {
    return this.discountRuleRepository.getAll();
  }

  async create(pMutable: CreateDiscountRuleDto): Promise<DiscountRuleDto> {
    return this.discountRuleRepository.create(pMutable);
  }

  async createMany(
    pMutableList: CreateDiscountRuleDto[],
  ): Promise<DiscountRuleDto[]> {
    return this.discountRuleRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdateDiscountRuleDto): Promise<DiscountRuleDto> {
    return this.discountRuleRepository.update(pMutable);
  }

  async updateMany(
    pMutableList: UpdateDiscountRuleDto[],
  ): Promise<DiscountRuleDto[]> {
    return this.discountRuleRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.discountRuleRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.discountRuleRepository.deleteMany(ids);
  }
}

export default DiscountRuleService;
