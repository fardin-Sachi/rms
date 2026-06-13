import type IDto from '../../../../../shared/interfaces/dto.interface.js';

export interface DiscountRuleDto extends IDto {
  promotionId: number;
  discountTypeId: number;
  discountValue: number;
}
