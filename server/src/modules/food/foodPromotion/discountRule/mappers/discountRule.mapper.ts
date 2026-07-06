import type { IEntityMapper } from '../../../../../shared/interfaces/mapper.interface.js';
import type { CreateDiscountRuleDto } from '../dtos/createDiscountRule.dto.js';
import type { DiscountRuleDto } from '../dtos/discountRule.dto.js';
import type { UpdateDiscountRuleDto } from '../dtos/updateDiscountRule.dto.js';
import DiscountRuleEntity from '../entities/discountRule.entity.js';

export default class DiscountRuleMapper implements IEntityMapper<
  DiscountRuleEntity,
  DiscountRuleDto,
  CreateDiscountRuleDto,
  UpdateDiscountRuleDto
> {
  toEntity(dto: DiscountRuleDto): DiscountRuleEntity {
    return new DiscountRuleEntity(
      dto.id,
      dto.promotionId,
      dto.discountTypeId,
      dto.discountValue,
    );
  }

  fromCreateDto(dto: CreateDiscountRuleDto): DiscountRuleEntity {
    return new DiscountRuleEntity(
      0,
      dto.promotionId,
      dto.discountTypeId,
      dto.discountValue,
    );
  }

  toDto(entity: DiscountRuleEntity): DiscountRuleDto {
    return {
      id: entity.id,
      promotionId: entity.promotionId,
      discountTypeId: entity.discountTypeId,
      discountValue: entity.discountValue,
    };
  }

  updateEntity(
    entity: DiscountRuleEntity,
    dto: UpdateDiscountRuleDto,
  ): DiscountRuleEntity {
    if (dto.discountTypeId !== undefined) {
      entity.changeDiscountType(dto.discountTypeId);
    }

    if (dto.discountValue !== undefined) {
      entity.changeDiscountValue(dto.discountValue);
    }

    return entity;
  }
}
