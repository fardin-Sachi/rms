import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import OrderDetailService from './orderDetail.service.js';
import type { OrderDetailDto } from './dtos/orderDetail.dto.js';
import type { CreateOrderDetailDto } from './dtos/createOrderDetail.dto.js';
import type { UpdateOrderDetailDto } from './dtos/updateOrderDetail.dto.js';
import { ApiResponse } from '../../../shared/utils/apiResponse.js';

class OrderDetailController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: OrderDetailService,
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

    const orderDetailDto: OrderDetailDto | null = await this.mService.get(id);

    if (!orderDetailDto) {
      return ApiResponse.error(
        res,
        404,
        `No employee found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<OrderDetailDto>(
      res,
      200,
      `Order Detail found with this ID: ${orderDetailDto.id}`,
      orderDetailDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const employeeDtos: OrderDetailDto[] = await this.mService.getAll();

    return ApiResponse.success<OrderDetailDto[]>(
      res,
      200,
      `Order Details found`,
      employeeDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateOrderDetailDto;

    const createdOrderDetailDto: OrderDetailDto =
      await this.mService.create(payload);

    return ApiResponse.success<OrderDetailDto>(
      res,
      201,
      `Order Detail created with ID: ${createdOrderDetailDto.id}`,
      createdOrderDetailDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateOrderDetailDto[];

    const createdOrderDetailDtos: OrderDetailDto[] =
      await this.mService.createMany(payload);

    return ApiResponse.success<OrderDetailDto[]>(
      res,
      201,
      `Order Details are created`,
      createdOrderDetailDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdateOrderDetailDto = req.body;
    payload.id = id;

    const updatedOrderDetailDto = await this.mService.update(payload);

    return ApiResponse.success<OrderDetailDto>(
      res,
      200,
      `Order Detail updated with ID: ${updatedOrderDetailDto.id}`,
      updatedOrderDetailDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateOrderDetailDto[];

    const updatedOrderDetailDtos: OrderDetailDto[] =
      await this.mService.updateMany(payload);

    return ApiResponse.success<OrderDetailDto[]>(
      res,
      200,
      `Order Details are updated`,
      updatedOrderDetailDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    await this.mService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Order Detail is deleted with ID: ${id}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    await this.mService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Order Details are deleted with IDs: ${ids}`,
    );
  }
}

export default OrderDetailController;
