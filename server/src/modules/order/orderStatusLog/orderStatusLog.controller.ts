import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import type { OrderStatusLogDto } from './dtos/orderStatusLog.dto.js';
import type { CreateOrderStatusLogDto } from './dtos/createOrderStatusLog.dto.js';
import type { UpdateOrderStatusLogDto } from './dtos/updateOrderStatusLog.dto.js';
import OrderStatusLogService from './orderStatusLog.service.js';
import { ApiResponse } from '../../../shared/utils/apiResponse.js';

class OrderStatusLogController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: OrderStatusLogService,
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

    const orderStatusLogDto: OrderStatusLogDto | null =
      await this.mService.get(id);

    if (!orderStatusLogDto) {
      return ApiResponse.error(
        res,
        404,
        `No order status log found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<OrderStatusLogDto>(
      res,
      200,
      `Order Status Log found with this ID: ${orderStatusLogDto.id}`,
      orderStatusLogDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const orderStatusLogDtos: OrderStatusLogDto[] =
      await this.mService.getAll();

    return ApiResponse.success<OrderStatusLogDto[]>(
      res,
      200,
      `Order Status Logs found`,
      orderStatusLogDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateOrderStatusLogDto;

    const createdOrderStatusLogDto: OrderStatusLogDto =
      await this.mService.create(payload);

    return ApiResponse.success<OrderStatusLogDto>(
      res,
      201,
      `Order Status Log created with ID: ${createdOrderStatusLogDto.id}`,
      createdOrderStatusLogDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateOrderStatusLogDto[];

    const createdOrderStatusLogDtos: OrderStatusLogDto[] =
      await this.mService.createMany(payload);

    return ApiResponse.success<OrderStatusLogDto[]>(
      res,
      201,
      `Order Status Logs are created`,
      createdOrderStatusLogDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdateOrderStatusLogDto = req.body;
    payload.id = id;

    const updatedOrderStatusLogDto = await this.mService.update(payload);

    return ApiResponse.success<OrderStatusLogDto>(
      res,
      200,
      `Order Status Log updated with ID: ${updatedOrderStatusLogDto.id}`,
      updatedOrderStatusLogDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateOrderStatusLogDto[];

    const updatedOrderStatusLogDtos: OrderStatusLogDto[] =
      await this.mService.updateMany(payload);

    return ApiResponse.success<OrderStatusLogDto[]>(
      res,
      200,
      `Order Status Logs are updated`,
      updatedOrderStatusLogDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    await this.mService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Order Status Log is deleted with ID: ${id}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    await this.mService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Order Status Logs are deleted with IDs: ${ids}`,
    );
  }
}

export default OrderStatusLogController;
