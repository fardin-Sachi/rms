import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type CreateFoodMenuDto from '../dtos/createFoodMenu.dto.js';
import type FoodMenuDto from '../dtos/foodMenu.dto.js';
import type UpdateFoodMenuDto from '../dtos/updateFoodMenu.dto.js';
import FoodMenuEntity from '../entities/foodMenu.entity.js';

export default class FoodMenuMapper implements IEntityMapper<
  FoodMenuEntity,
  FoodMenuDto,
  CreateFoodMenuDto,
  UpdateFoodMenuDto
> {
  toEntity(dto: FoodMenuDto): FoodMenuEntity {
    return new FoodMenuEntity(
      dto.id,
      dto.name,
      dto.description ?? null,
      dto.imageUrl ?? null,
      dto.preparationTime ?? null,
      dto.price ?? null,
      dto.activeStatus,
    );
  }

  fromCreateDto(dto: CreateFoodMenuDto): FoodMenuEntity {
    return new FoodMenuEntity(
      0,
      dto.name,
      dto.description ?? null,
      dto.imageUrl ?? null,
      dto.preparationTime ?? null,
      dto.price ?? null,
      dto.activeStatus,
    );
  }

  toDto(entity: FoodMenuEntity): FoodMenuDto {
    const dto: FoodMenuDto = {
      id: entity.id,
      name: entity.name,
      activeStatus: entity.activeStatus,
    };

    if (entity.description !== null) {
      dto.description = entity.description;
    }

    if (entity.imageUrl !== null) {
      dto.imageUrl = entity.imageUrl;
    }

    if (entity.preparationTime !== null) {
      dto.preparationTime = entity.preparationTime;
    }

    if (entity.price !== null) {
      dto.price = entity.price;
    }

    return dto;
  }

  updateEntity(entity: FoodMenuEntity, dto: UpdateFoodMenuDto): FoodMenuEntity {
    if (dto.name !== undefined) {
      entity.changeName(dto.name);
    }

    if (dto.description !== undefined) {
      entity.updateDescription(dto.description ?? null);
    }

    if (dto.imageUrl !== undefined) {
      entity.updateImage(dto.imageUrl ?? null);
    }

    if (dto.preparationTime !== undefined) {
      entity.updatePreparationTime(dto.preparationTime ?? null);
    }

    if (dto.price !== undefined) {
      entity.updatePrice(dto.price ?? null);
    }

    if (dto.activeStatus !== undefined) {
      if (dto.activeStatus) {
        entity.activate();
      } else {
        entity.deactivate();
      }
    }

    return entity;
  }
}
