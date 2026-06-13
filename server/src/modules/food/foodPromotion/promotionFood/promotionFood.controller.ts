import type { Request, Response } from 'express';
import PromotionFoodService from './promotionFood.service.js';
import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';

class PromotionFoodController {
  private readonly promotionFoodService: PromotionFoodService;

  constructor(private readonly logger: ILogger) {
    this.promotionFoodService = new PromotionFoodService(logger);

    this.assign = this.assign.bind(this);
    this.getAll = this.getAll.bind(this);
    this.getByPromotionId = this.getByPromotionId.bind(this);
    this.remove = this.remove.bind(this);
  }

  assign = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.promotionFoodService.assign(req.body);
      return res.status(201).json({
        success: true,
        message: 'Food assigned to promotion successfully',
        data,
      });
    } catch (error) {
      return this.handleError(error, res);
    }
  };

  getAll = async (_req: Request, res: Response): Promise<Response> => {
    const data = await this.promotionFoodService.getAll();
    return res.status(200).json({
      success: true,
      message: 'Promotion foods found',
      data,
    });
  };

  getByPromotionId = async (req: Request, res: Response): Promise<Response> => {
    try {
      const data = await this.promotionFoodService.getByPromotionId(
        Number(req.params.promotionId),
      );
      return res.status(200).json({
        success: true,
        message: 'Promotion foods fetched successfully',
        data,
      });
    } catch (error) {
      return this.handleError(error, res);
    }
  };

  remove = async (req: Request, res: Response): Promise<Response> => {
    try {
      await this.promotionFoodService.remove(req.body);
      return res.status(200).json({
        success: true,
        message: 'Food removed from promotion successfully',
      });
    } catch (error) {
      return this.handleError(error, res);
    }
  };

  private handleError(error: unknown, res: Response): Response {
    const message = error instanceof Error ? error.message : 'Unexpected error';
    const status = message.toLowerCase().includes('not found') ? 404 : 400;
    return res.status(status).json({ success: false, message });
  }
}

export default PromotionFoodController;
