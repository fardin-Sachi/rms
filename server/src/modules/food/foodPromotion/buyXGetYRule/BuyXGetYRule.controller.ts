import type { ILogger } from '../../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import { ApiResponse } from '../../../../shared/utils/apiResponse.js';
import BuyXGetYRuleService from './BuyXGetYRule.service.js';
import type { BuyXGetYRuleDto } from './dtos/buyXGetYRule.dto.js';
import type { UpdateBuyXGetYRuleDto } from './dtos/updateBuyXGetYRule.dto.js';
import type { CreateBuyXGetYRuleDto } from './dtos/createBuyXGetYRule.dto.js';

class BuyXGetYRuleController {
  private readonly buyXGetYRuleService: BuyXGetYRuleService;
  constructor(private readonly logger: ILogger) {
    this.buyXGetYRuleService = new BuyXGetYRuleService(logger);

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
    const id: number = Number(req.params.promotionId);

    const buyXGetYRuleDto: BuyXGetYRuleDto | null =
      await this.buyXGetYRuleService.get(id);

    if (!buyXGetYRuleDto) {
      return ApiResponse.error(
        res,
        404,
        `No Buy X Get Y Rule found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<BuyXGetYRuleDto>(
      res,
      200,
      `Buy X Get Y Rule found with this ID: ${buyXGetYRuleDto.promotionId}`,
      buyXGetYRuleDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const buyXGetYRuleDtos: BuyXGetYRuleDto[] =
      await this.buyXGetYRuleService.getAll();

    return ApiResponse.success<BuyXGetYRuleDto[]>(
      res,
      200,
      `Buy X Get Y Rules found`,
      buyXGetYRuleDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateBuyXGetYRuleDto;

    const createdbuyXGetYRuleDto: BuyXGetYRuleDto =
      await this.buyXGetYRuleService.create(payload);

    return ApiResponse.success<BuyXGetYRuleDto>(
      res,
      201,
      `Buy X Get Y Rule created with ID: ${createdbuyXGetYRuleDto.promotionId}`,
      createdbuyXGetYRuleDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateBuyXGetYRuleDto[];

    const createdbuyXGetYRuleDtos: BuyXGetYRuleDto[] =
      await this.buyXGetYRuleService.createMany(payload);

    return ApiResponse.success<BuyXGetYRuleDto[]>(
      res,
      201,
      `Buy X Get Y Rules are created`,
      createdbuyXGetYRuleDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.promotionId);
    const payload: UpdateBuyXGetYRuleDto = req.body;
    payload.promotionId = id;

    const updatedPromotionDto = await this.buyXGetYRuleService.update(payload);

    return ApiResponse.success<BuyXGetYRuleDto>(
      res,
      200,
      `Buy X Get Y Rule updated with ID: ${updatedPromotionDto.promotionId}`,
      updatedPromotionDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateBuyXGetYRuleDto[];

    const updatedPromotionDtos: BuyXGetYRuleDto[] =
      await this.buyXGetYRuleService.updateMany(payload);

    return ApiResponse.success<BuyXGetYRuleDto[]>(
      res,
      200,
      `Buy X Get Y Rules are updated`,
      updatedPromotionDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.promotionId);

    const deletedId: number = await this.buyXGetYRuleService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Buy X Get Y Rule is deleted with ID: ${deletedId}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    const deletedIds: number[] = await this.buyXGetYRuleService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Buy X Get Y Rules are deleted with IDs: ${deletedIds}`,
    );
  }
}

export default BuyXGetYRuleController;
