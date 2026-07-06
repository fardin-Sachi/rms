import type { IEntityMapper } from '../../../../../shared/interfaces/mapper.interface.js';
import type { CreatePromotionDto } from '../dtos/createPromotion.dto.js';
import type { PromotionDto } from '../dtos/promotion.dto.js';
import type { UpdatePromotionDto } from '../dtos/updatePromotion.dto.js';
import PromotionEntity from '../entities/promotion.entity.js';

export default class PromotionMapper implements IEntityMapper<
  PromotionEntity,
  PromotionDto,
  CreatePromotionDto,
  UpdatePromotionDto
> {
  toEntity(dto: PromotionDto): PromotionEntity {
    return new PromotionEntity(
      dto.id,
      dto.name,
      dto.description ?? null,
      dto.promotionTypeId,
      dto.startTime ?? null,
      dto.endTime ?? null,
      dto.isPermanent,
      dto.activeStatus,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      dto.updatedBy ?? null,
      dto.updatedOn ?? null,
    );
  }

  fromCreateDto(dto: CreatePromotionDto): PromotionEntity {
    return new PromotionEntity(
      0,
      dto.name,
      dto.description ?? null,
      dto.promotionTypeId,
      dto.startTime ?? null,
      dto.endTime ?? null,
      dto.isPermanent ?? false,
      dto.activeStatus ?? true,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      null,
      null,
    );
  }

  toDto(entity: PromotionEntity): PromotionDto {
    const dto: PromotionDto = {
      id: entity.id,
      name: entity.name,
      promotionTypeId: entity.promotionTypeId,
      isPermanent: entity.isPermanent,
      activeStatus: entity.activeStatus,
    };

    if (entity.description) dto.description = entity.description;

    if (entity.startTime) dto.startTime = entity.startTime;

    if (entity.endTime) dto.endTime = entity.endTime;

    if (entity.createdBy !== null) dto.createdBy = entity.createdBy;

    if (entity.createdOn) dto.createdOn = entity.createdOn;

    if (entity.updatedBy !== null) dto.updatedBy = entity.updatedBy;

    if (entity.updatedOn) dto.updatedOn = entity.updatedOn;

    return dto;
  }

  updateEntity(
    entity: PromotionEntity,
    dto: UpdatePromotionDto,
  ): PromotionEntity {
    if (dto.name !== undefined) {
      entity.changeName(dto.name);
    }

    if (dto.description !== undefined) {
      entity.changeDescription(dto.description ?? null);
    }

    if (dto.promotionTypeId !== undefined) {
      entity.changePromotionType(dto.promotionTypeId);
    }

    if (dto.startTime !== undefined) {
      entity.updateStartTime(dto.startTime ?? null);
    }

    if (dto.endTime !== undefined) {
      entity.updateEndTime(dto.endTime ?? null);
    }

    if (dto.isPermanent !== undefined) {
      if (dto.isPermanent) {
        entity.makePermanent();
      } else {
        entity.makeTemporary();
      }
    }

    if (dto.activeStatus !== undefined) {
      if (dto.activeStatus) {
        entity.activate();
      } else {
        entity.deactivate();
      }
    }

    entity.updateAudit(dto.updatedBy!, dto.updatedOn!);

    return entity;
  }
}
