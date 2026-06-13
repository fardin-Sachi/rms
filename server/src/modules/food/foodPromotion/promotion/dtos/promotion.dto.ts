import type IDto from '../../../../../shared/interfaces/dto.interface.js';

export interface PromotionDto extends IDto<number> {
  name: string;
  description?: string;
  promotionTypeId: number;
  startTime?: Date;
  endTime?: Date;
  isPermanent: boolean;
  activeStatus: boolean;
  createdOn?: Date;
  createdBy?: number;
  updatedOn?: Date;
  updatedBy?: number;
}
