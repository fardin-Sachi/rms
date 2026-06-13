import type IRepository from '../../../../shared/interfaces/repository.interface.js';
import type { AssignPromotionFoodDto } from './dtos/assignPromotionFood.dto.js';
import type { RemovePromotionFoodDto } from './dtos/removePromotionFood.dto.js';

type PromotionFoodDto = AssignPromotionFoodDto;

class PromotionFoodRepository implements IRepository<
  PromotionFoodDto,
  AssignPromotionFoodDto,
  RemovePromotionFoodDto,
  number
> {
  private readonly assignments = new Map<string, number>();

  private key(promotionId: number, foodMenuId: number): string {
    return `${promotionId}:${foodMenuId}`;
  }

  async get(_id: number): Promise<PromotionFoodDto | null> {
    return null;
  }

  async getAll(): Promise<PromotionFoodDto[]> {
    const groupedAssignments = new Map<number, number[]>();

    for (const key of this.assignments.keys()) {
      const [promotionIdValue, foodMenuIdValue] = key.split(':');

      const promotionId = Number(promotionIdValue);
      const foodMenuId = Number(foodMenuIdValue);

      const existingFoodMenuIds = groupedAssignments.get(promotionId) ?? [];
      existingFoodMenuIds.push(foodMenuId);

      groupedAssignments.set(promotionId, existingFoodMenuIds);
    }

    return Array.from(groupedAssignments.entries()).map(
      ([promotionId, foodMenuIds]) => ({
        promotionId,
        foodMenuIds,
      }),
    );
  }

  async getByPromotionId(promotionId: number): Promise<PromotionFoodDto[]> {
    return (await this.getAll()).filter(
      (assignment) => assignment.promotionId === promotionId,
    );
  }

  async getOne(
    promotionId: number,
    foodMenuId: number,
  ): Promise<PromotionFoodDto | null> {
    const exists = this.assignments.has(this.key(promotionId, foodMenuId));

    if (!exists) {
      return null;
    }

    return {
      promotionId,
      foodMenuIds: [foodMenuId],
    };
  }

  async create(pMutable: AssignPromotionFoodDto): Promise<PromotionFoodDto> {
    for (const foodMenuId of pMutable.foodMenuIds) {
      this.assignments.set(
        this.key(pMutable.promotionId, foodMenuId),
        foodMenuId,
      );
    }

    return {
      promotionId: pMutable.promotionId,
      foodMenuIds: pMutable.foodMenuIds,
    };
  }

  async createMany(
    pMutableList: AssignPromotionFoodDto[],
  ): Promise<PromotionFoodDto[]> {
    return Promise.all(pMutableList.map((pMutable) => this.create(pMutable)));
  }

  async update(pMutable: RemovePromotionFoodDto): Promise<PromotionFoodDto> {
    return {
      promotionId: pMutable.promotionId,
      foodMenuIds: [pMutable.foodMenuId],
    };
  }

  async updateMany(
    pMutableList: RemovePromotionFoodDto[],
  ): Promise<PromotionFoodDto[]> {
    return pMutableList.map((pMutable) => ({
      promotionId: pMutable.promotionId,
      foodMenuIds: [pMutable.foodMenuId],
    }));
  }

  async delete(promotionId: number, foodMenuId?: number): Promise<number> {
    if (foodMenuId !== undefined) {
      this.assignments.delete(this.key(promotionId, foodMenuId));
      return promotionId;
    }

    await this.deleteByPromotionId(promotionId);
    return promotionId;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    await Promise.all(ids.map((id) => this.delete(id)));
    return ids;
  }

  async deleteByPromotionId(promotionId: number): Promise<number> {
    return promotionId;
  }
}

export default PromotionFoodRepository;
