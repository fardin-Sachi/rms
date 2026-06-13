import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import { ApiResponse } from '../../../../shared/libs/apiResponse.js';
import DiscountRuleService from './discountRule.service.js';
import type { DiscountRuleDto } from './dtos/discountRule.dto.js';
import type { CreateDiscountRuleDto } from './dtos/createDiscountRule.dto.js';
import type { UpdateDiscountRuleDto } from './dtos/updateDiscountRule.dto.js';

class DiscountRuleController {
  private readonly discountRuleService: DiscountRuleService;
  constructor(private readonly logger: ILogger) {
    this.discountRuleService = new DiscountRuleService(logger);

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

    const discountRuleDto: DiscountRuleDto | null =
      await this.discountRuleService.get(id);

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
    const discountRuleDtos: DiscountRuleDto[] =
      await this.discountRuleService.getAll();

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
      await this.discountRuleService.create(payload);

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
      await this.discountRuleService.createMany(payload);

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
      await this.discountRuleService.update(payload);

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
      await this.discountRuleService.updateMany(payload);

    return ApiResponse.success<DiscountRuleDto[]>(
      res,
      200,
      `Discount rules are updated`,
      updatedPromotionDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    const deletedId: number = await this.discountRuleService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Discount rule is deleted with ID: ${deletedId}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    const deletedIds: number[] = await this.discountRuleService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Discount rules are deleted with IDs: ${deletedIds}`,
    );
  }
}

export default DiscountRuleController;
