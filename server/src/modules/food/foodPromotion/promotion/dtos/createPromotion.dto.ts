export interface CreatePromotionDto {
  name: string;
  description?: string;
  promotionTypeId: number;
  startTime?: Date;
  endTime?: Date;
  isPermanent?: boolean;
  activeStatus?: boolean;
  createdOn?: Date;
  createdBy?: number;
}
