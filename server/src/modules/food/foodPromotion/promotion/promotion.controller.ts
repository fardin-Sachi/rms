import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import { ApiResponse } from '../../../../shared/utils/apiResponse.js';
import type { CreatePromotionDto } from './dtos/createPromotion.dto.js';
import type { PromotionDto } from './dtos/promotion.dto.js';
import type { UpdatePromotionDto } from './dtos/updatePromotion.dto.js';
import PromotionService from './promotion.service.js';

class PromotionController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: PromotionService,
  ) {
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.createMany = this.createMany.bind(this);
    this.update = this.update.bind(this);
    this.updateMany = this.updateMany.bind(this);
    this.delete = this.delete.bind(this);
    this.deleteMany = this.deleteMany.bind(this);
  }

  async get(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    const promotionDto: PromotionDto | null = await this.mService.get(id);

    if (!promotionDto) {
      return ApiResponse.error(
        res,
        404,
        `No food promotion found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<PromotionDto>(
      res,
      200,
      `Food Promotion found with this ID: ${promotionDto.id}`,
      promotionDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const promotionDtos: PromotionDto[] = await this.mService.getAll();

    return ApiResponse.success<PromotionDto[]>(
      res,
      200,
      `Food Promotions found`,
      promotionDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreatePromotionDto;

    const createdPromotionDto: PromotionDto =
      await this.mService.create(payload);

    return ApiResponse.success<PromotionDto>(
      res,
      201,
      `Food Promotion created with ID: ${createdPromotionDto.id}`,
      createdPromotionDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreatePromotionDto[];

    const createdPromotionDtos: PromotionDto[] =
      await this.mService.createMany(payload);

    return ApiResponse.success<PromotionDto[]>(
      res,
      201,
      `Food Promotions are created`,
      createdPromotionDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdatePromotionDto = req.body;
    payload.id = id;

    const updatedPromotionDto = await this.mService.update(payload);

    return ApiResponse.success<PromotionDto>(
      res,
      200,
      `Food Promotion updated with ID: ${updatedPromotionDto.id}`,
      updatedPromotionDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdatePromotionDto[];

    const updatedPromotionDtos: PromotionDto[] =
      await this.mService.updateMany(payload);

    return ApiResponse.success<PromotionDto[]>(
      res,
      200,
      `Food Promotions are updated`,
      updatedPromotionDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    await this.mService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Food Promotion is deleted with ID: ${id}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    await this.mService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Food Promotions are deleted with IDs: ${ids}`,
    );
  }
}

export default PromotionController;
