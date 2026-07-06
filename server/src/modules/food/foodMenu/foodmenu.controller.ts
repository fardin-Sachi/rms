import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/utils/apiResponse.js';
import FoodMenuService from './foodMenu.service.js';
import type FoodMenuDto from './dtos/foodMenu.dto.js';
import type CreateFoodMenuDto from './dtos/createFoodMenu.dto.js';
import type UpdateFoodMenuDto from './dtos/updateFoodMenu.dto.js';

class FoodMenuController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: FoodMenuService,
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

    const foodMenuDto: FoodMenuDto | null = await this.mService.get(id);

    if (!foodMenuDto) {
      return ApiResponse.error(
        res,
        404,
        `No food menu found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<FoodMenuDto>(
      res,
      200,
      `Food Menu found with this ID: ${foodMenuDto.id}`,
      foodMenuDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const foodMenuDtos: FoodMenuDto[] = await this.mService.getAll();

    return ApiResponse.success<FoodMenuDto[]>(
      res,
      200,
      `Food menu found`,
      foodMenuDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateFoodMenuDto;

    const createdFoodMenuDto: FoodMenuDto = await this.mService.create(payload);

    return ApiResponse.success<FoodMenuDto>(
      res,
      201,
      `Food menu created with ID: ${createdFoodMenuDto.id}`,
      createdFoodMenuDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateFoodMenuDto[];

    const createdFoodMenuDtos: FoodMenuDto[] =
      await this.mService.createMany(payload);

    return ApiResponse.success<FoodMenuDto[]>(
      res,
      201,
      `Food menu are created`,
      createdFoodMenuDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdateFoodMenuDto = req.body;
    payload.id = id;

    const updatedFoodMenuDto = await this.mService.update(payload);

    return ApiResponse.success<FoodMenuDto>(
      res,
      200,
      `Food menu updated with ID: ${updatedFoodMenuDto.id}`,
      updatedFoodMenuDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateFoodMenuDto[];

    const updatedFoodMenuDtos: FoodMenuDto[] =
      await this.mService.updateMany(payload);

    return ApiResponse.success<FoodMenuDto[]>(
      res,
      200,
      `Food menu are updated`,
      updatedFoodMenuDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    await this.mService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Food menu is deleted with ID: ${id}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    await this.mService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Food menu are deleted with IDs: ${ids}`,
    );
  }
}

export default FoodMenuController;
