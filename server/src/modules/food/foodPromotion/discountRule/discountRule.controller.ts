import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import { ApiResponse } from '../../../../shared/utils/apiResponse.js';
import DiscountRuleService from './discountRule.service.js';
import type { DiscountRuleDto } from './dtos/discountRule.dto.js';
import type { CreateDiscountRuleDto } from './dtos/createDiscountRule.dto.js';
import type { UpdateDiscountRuleDto } from './dtos/updateDiscountRule.dto.js';

class DiscountRuleController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: DiscountRuleService,
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

    const discountRuleDto: DiscountRuleDto | null = await this.mService.get(id);

    if (!discountRuleDto) {
      return ApiResponse.error(
        res,
        404,
        `No discount rule found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<DiscountRuleDto>(
      res,
      200,
      `Discount rule found with this ID: ${discountRuleDto.id}`,
      discountRuleDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const discountRuleDtos: DiscountRuleDto[] = await this.mService.getAll();

    return ApiResponse.success<DiscountRuleDto[]>(
      res,
      200,
      `Discount rules found`,
      discountRuleDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateDiscountRuleDto;

    const createdPromotionDto: DiscountRuleDto =
      await this.mService.create(payload);

    return ApiResponse.success<CreateDiscountRuleDto>(
      res,
      201,
      `Discount rule created with ID: ${createdPromotionDto.id}`,
      createdPromotionDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateDiscountRuleDto[];

    const createdPromotionDtos: DiscountRuleDto[] =
      await this.mService.createMany(payload);

    return ApiResponse.success<DiscountRuleDto[]>(
      res,
      201,
      `Discount rules are created`,
      createdPromotionDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdateDiscountRuleDto = req.body;
    payload.id = id;

    const updatedPromotionDto: DiscountRuleDto =
      await this.mService.update(payload);

    return ApiResponse.success<DiscountRuleDto>(
      res,
      200,
      `Discount rule updated with ID: ${updatedPromotionDto.id}`,
      updatedPromotionDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateDiscountRuleDto[];

    const updatedPromotionDtos: DiscountRuleDto[] =
      await this.mService.updateMany(payload);

    return ApiResponse.success<DiscountRuleDto[]>(
      res,
      200,
      `Discount rules are updated`,
      updatedPromotionDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    await this.mService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Discount rule is deleted with ID: ${id}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    await this.mService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Discount rules are deleted with IDs: ${ids}`,
    );
  }
}

export default DiscountRuleController;
