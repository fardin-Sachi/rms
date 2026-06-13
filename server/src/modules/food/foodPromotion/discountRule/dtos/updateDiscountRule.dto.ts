import type IDto from '../../../../../shared/interfaces/dto.interface.js';

export interface UpdateDiscountRuleDto extends IDto {
  discountTypeId?: number;
  discountValue?: number;
}
