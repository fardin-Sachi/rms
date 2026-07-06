import type { Request, Response } from 'express';
import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import { ApiResponse } from '../../../../shared/utils/apiResponse.js';
import type { AssignPromotionFoodDto } from './dtos/assignPromotionFood.dto.js';
import type { RemovePromotionFoodDto } from './dtos/removePromotionFood.dto.js';
import type PromotionFoodEntity from './entities/promotionFood.entity.js';
import type PromotionFoodService from './promotionFood.service.js';

class PromotionFoodController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: PromotionFoodService,
  ) {
    this.getByPromotionId = this.getByPromotionId.bind(this);
    this.assign = this.assign.bind(this);
    this.replace = this.replace.bind(this);
    this.remove = this.remove.bind(this);
  }

  async getByPromotionId(req: Request, res: Response): Promise<Response> {
    const promotionId = Number(req.params.promotionId);

    const promotionFoods = await this.mService.getByPromotionId(promotionId);

    return ApiResponse.success<PromotionFoodEntity[]>(
      res,
      200,
      `Promotion foods found for promotion ID: ${promotionId}`,
      promotionFoods,
    );
  }

  async assign(req: Request, res: Response): Promise<Response> {
    const payload = req.body as AssignPromotionFoodDto;

    await this.mService.assign(payload);

    return ApiResponse.success<void>(
      res,
      201,
      `Foods assigned to promotion ID: ${payload.promotionId}`,
    );
  }

  async replace(req: Request, res: Response): Promise<Response> {
    const payload = req.body as AssignPromotionFoodDto;

    await this.mService.replace(payload);

    return ApiResponse.success<void>(
      res,
      200,
      `Promotion foods updated for promotion ID: ${payload.promotionId}`,
    );
  }

  async remove(req: Request, res: Response): Promise<Response> {
    const payload = req.body as RemovePromotionFoodDto;

    await this.mService.remove(payload);

    return ApiResponse.success<void>(
      res,
      200,
      `Food ${payload.foodMenuId} removed from promotion ${payload.promotionId}`,
    );
  }
}

export default PromotionFoodController;
