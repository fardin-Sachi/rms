import type IDto from '../../../../../shared/interfaces/dto.interface.js';

export interface UpdatePromotionDto extends IDto {
  name?: string;
  description?: string;
  promotionTypeId?: number;
  startTime?: Date;
  endTime?: Date;
  isPermanent?: boolean;
  activeStatus?: boolean;
  updatedOn?: Date;
  updatedBy?: number;
}
