import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/libs/apiResponse.js';
import type {RestaurantTableDto} from "./dtos/restaurantTable.dto.js";
import type {CreateRestaurantTableDto} from "./dtos/createRestaurantTable.dto.js";
import type {UpdateRestaurantTableDto} from "./dtos/updateRestaurantTable.dto.js";
import RestaurantTableService from "./restaurantTable.service.js";

class RestaurantTableController {
  private readonly restaurantTableService: RestaurantTableService;
  constructor(private readonly logger: ILogger) {
    this.restaurantTableService = new RestaurantTableService(logger);

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

    const restaurantTableDto: RestaurantTableDto | null = await this.restaurantTableService.get(id);

    if (!restaurantTableDto) {
      return ApiResponse.error(
        res,
        404,
        `No restaurant table found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<RestaurantTableDto>(
      res,
      200,
      `Restaurant table found with this ID: ${restaurantTableDto.id}`,
      restaurantTableDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const restaurantTableDtos: RestaurantTableDto[] = await this.restaurantTableService.getAll();

    return ApiResponse.success<RestaurantTableDto[]>(
      res,
      200,
      `Employees found`,
      restaurantTableDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateRestaurantTableDto;

    const createdRestaurantTableDto: RestaurantTableDto =
      await this.restaurantTableService.create(payload);

    return ApiResponse.success<RestaurantTableDto>(
      res,
      201,
      `Restaurant table created with ID: ${createdRestaurantTableDto.id}`,
      createdRestaurantTableDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateRestaurantTableDto[];

    const createdRestaurantTableDtos: RestaurantTableDto[] =
      await this.restaurantTableService.createMany(payload);

    return ApiResponse.success<RestaurantTableDto[]>(
      res,
      201,
      `Employees are created`,
      createdRestaurantTableDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdateRestaurantTableDto = req.body;
    payload.id = id;

    const updateRestaurantTableDto = await this.restaurantTableService.update(payload);

    return ApiResponse.success<RestaurantTableDto>(
      res,
      200,
      `Restaurant table updated with ID: ${updateRestaurantTableDto.id}`,
      updateRestaurantTableDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateRestaurantTableDto[];

    const updateRestaurantTableDtos: RestaurantTableDto[] =
      await this.restaurantTableService.updateMany(payload);

    return ApiResponse.success<RestaurantTableDto[]>(
      res,
      200,
      `Employees are updated`,
      updateRestaurantTableDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    const deletedId: number = await this.restaurantTableService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Restaurant table is deleted with ID: ${deletedId}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    const deletedIds: number[] = await this.restaurantTableService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Employees are deleted with IDs: ${deletedIds}`,
    );
  }
}

export default RestaurantTableController;
