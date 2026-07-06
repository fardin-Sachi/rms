import type { IEntityMapper } from '../../../../../shared/interfaces/mapper.interface.js';
import type { BuyXGetYRuleDto } from '../dtos/buyXGetYRule.dto.js';
import type { CreateBuyXGetYRuleDto } from '../dtos/createBuyXGetYRule.dto.js';
import type { UpdateBuyXGetYRuleDto } from '../dtos/updateBuyXGetYRule.dto.js';
import BuyXGetYRuleEntity from '../entities/buyXGetYRule.entity.js';

export default class BuyXGetYRuleMapper implements IEntityMapper<
  BuyXGetYRuleEntity,
  BuyXGetYRuleDto,
  CreateBuyXGetYRuleDto,
  UpdateBuyXGetYRuleDto
> {
  toEntity(dto: BuyXGetYRuleDto): BuyXGetYRuleEntity {
    return new BuyXGetYRuleEntity(
      dto.promotionId,
      dto.buyFoodId,
      dto.buyQuantity,
      dto.freeFoodId,
      dto.freeFoodQuantity,
    );
  }

  fromCreateDto(dto: CreateBuyXGetYRuleDto): BuyXGetYRuleEntity {
    return new BuyXGetYRuleEntity(
      dto.promotionId,
      dto.buyFoodId,
      dto.buyQuantity,
      dto.freeFoodId,
      dto.freeFoodQuantity,
    );
  }

  toDto(entity: BuyXGetYRuleEntity): BuyXGetYRuleDto {
    return {
      promotionId: entity.promotionId,
      buyFoodId: entity.buyFoodId,
      buyQuantity: entity.buyQuantity,
      freeFoodId: entity.freeFoodId,
      freeFoodQuantity: entity.freeFoodQuantity,
    };
  }

  updateEntity(
    entity: BuyXGetYRuleEntity,
    dto: UpdateBuyXGetYRuleDto,
  ): BuyXGetYRuleEntity {
    if (dto.promotionId !== undefined) {
      entity.updatePromotionId(dto.promotionId);
    }

    if (dto.buyFoodId !== undefined) {
      entity.updateBuyFoodId(dto.buyFoodId);
    }

    if (dto.buyQuantity !== undefined) {
      entity.updateBuyQuantity(dto.buyQuantity);
    }

    if (dto.freeFoodId !== undefined) {
      entity.updateFreeFoodId(dto.freeFoodId);
    }

    if (dto.freeFoodQuantity !== undefined) {
      entity.updateFreeFoodQuantity(dto.freeFoodQuantity);
    }

    return entity;
  }
}
