// import type { AssignPromotionFoodDto } from '../dtos/assignPromotionFood.dto.js';
// import type { RemovePromotionFoodDto } from '../dtos/removePromotionFood.dto.js';
// import PromotionFoodEntity from '../entities/promotionFood.entity.js';

// export default class PromotionFoodMapper {
//   toEntity(dto: AssignPromotionFoodDto): PromotionFoodEntity {
//     return new PromotionFoodEntity(dto.promotionId, dto.foodMenuIds);
//   }

//   fromAssignDto(dto: AssignPromotionFoodDto): PromotionFoodEntity {
//     return new PromotionFoodEntity(dto.promotionId, dto.foodMenuIds);
//   }

//   toAssignDto(entity: PromotionFoodEntity): AssignPromotionFoodDto {
//     return {
//       promotionId: entity.promotionId,
//       foodMenuIds: entity.foodMenuIds,
//     };
//   }

//   updateEntity(
//     entity: PromotionFoodEntity,
//     dto: AssignPromotionFoodDto,
//   ): PromotionFoodEntity {
//     entity.assignFoodMenus(dto.foodMenuIds);
//     return entity;
//   }

//   removeFood(
//     entity: PromotionFoodEntity,
//     dto: RemovePromotionFoodDto,
//   ): PromotionFoodEntity {
//     entity.removeFoodMenu(dto.foodMenuId);
//     return entity;
//   }
// }

import type { AssignPromotionFoodDto } from '../dtos/assignPromotionFood.dto.js';
import type { RemovePromotionFoodDto } from '../dtos/removePromotionFood.dto.js';
import PromotionFoodEntity from '../entities/promotionFood.entity.js';

export default class PromotionFoodMapper {
  fromAssignDto(dto: AssignPromotionFoodDto): PromotionFoodEntity[] {
    return dto.foodMenuIds.map(
      (foodMenuId) => new PromotionFoodEntity(dto.promotionId, foodMenuId),
    );
  }

  fromRemoveDto(dto: RemovePromotionFoodDto): PromotionFoodEntity {
    return new PromotionFoodEntity(dto.promotionId, dto.foodMenuId);
  }
}
