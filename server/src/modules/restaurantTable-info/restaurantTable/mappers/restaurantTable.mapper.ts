import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type { CreateRestaurantTableDto } from '../dtos/createRestaurantTable.dto.js';
import type { RestaurantTableDto } from '../dtos/restaurantTable.dto.js';
import type { UpdateRestaurantTableDto } from '../dtos/updateRestaurantTable.dto.js';
import RestaurantTableEntity from '../entities/restaurantTable.entities.js';

export default class RestaurantTableMapper implements IEntityMapper<
  RestaurantTableEntity,
  RestaurantTableDto,
  CreateRestaurantTableDto,
  UpdateRestaurantTableDto
> {
  toEntity(dto: RestaurantTableDto): RestaurantTableEntity {
    return new RestaurantTableEntity(
      dto.id,
      dto.capacity,
      dto.tableNo,
      dto.activeStatus ?? 1,
    );
  }

  fromCreateDto(dto: CreateRestaurantTableDto): RestaurantTableEntity {
    return new RestaurantTableEntity(
      0,
      dto.capacity,
      dto.tableNo,
      dto.activeStatus ?? 1,
    );
  }

  toDto(entity: RestaurantTableEntity): RestaurantTableDto {
    return {
      id: entity.id,
      capacity: entity.capacity,
      tableNo: entity.tableNo,
      activeStatus: entity.activeStatus,
    };
  }

  updateEntity(
    entity: RestaurantTableEntity,
    dto: UpdateRestaurantTableDto,
  ): RestaurantTableEntity {
    if (dto.capacity !== undefined) {
      entity.changeCapacity(dto.capacity);
    }

    if (dto.tableNo !== undefined) {
      entity.changeTableNo(dto.tableNo);
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
