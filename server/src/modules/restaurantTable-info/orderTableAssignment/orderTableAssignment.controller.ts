import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import type {OrderTableAssignmentDto} from "./dtos/orderTableAssignment.dto.js";
import {ApiResponse} from "../../../shared/libs/apiResponse.js";
import OrderTableAssignmentService from "./orderTableAssignment.service.js";
import type {CreateOrderTableAssignmentDto} from "./dtos/createOrderTableAssignment.dto.js";
import type {UpdateOrderTableAssignmentDto} from "./dtos/updateOrderTableAssignment.dto.js";

class OrderTableAssignmentController {
  private readonly orderTableAssignmentService: OrderTableAssignmentService;
  constructor(private readonly logger: ILogger) {
    this.orderTableAssignmentService = new OrderTableAssignmentService(logger);

    this.get = this.get.bind(this);
    this.getByCustomerId = this.getByCustomerId.bind(this);
    this.getByRestaurantTable = this.getByRestaurantTable.bind(this);
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

    const orderTableAssignmentDto: OrderTableAssignmentDto | null = await this.orderTableAssignmentService.get(id);

    if (!orderTableAssignmentDto) {
      return ApiResponse.error(
        res,
        404,
        `No order table assignments found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<OrderTableAssignmentDto>(
      res,
      200,
      `Order Table Assignment found with this ID: ${orderTableAssignmentDto.customerOrderId}`,
      orderTableAssignmentDto,
    );
  }

  async getByCustomerId(req: Request, res: Response): Promise<Response> {
    const customerOrderId: number = Number(req.params.customerOrderId);

    const orderTableAssignmentDto: OrderTableAssignmentDto | null = await this.orderTableAssignmentService.getByCustomerId(customerOrderId);

    if (!orderTableAssignmentDto) {
      return ApiResponse.error(
        res,
        404,
        `No order table assignments found with this Customer ID: ${customerOrderId}`,
      );
    }

    return ApiResponse.success<OrderTableAssignmentDto>(
      res,
      200,
      `Order Table Assignment found with this Customer ID: ${orderTableAssignmentDto.customerOrderId}`,
      orderTableAssignmentDto,
    );
  }

  async getByRestaurantTable(req: Request, res: Response): Promise<Response> {
    const restaurantTableId: number = Number(req.params.restaurantTableId);

    const orderTableAssignmentDto: OrderTableAssignmentDto | null = await this.orderTableAssignmentService.getByRestaurantTable(restaurantTableId);

    if (!orderTableAssignmentDto) {
      return ApiResponse.error(
        res,
        404,
        `No order table assignments found with this Restaurant Table ID: ${restaurantTableId}`,
      );
    }

    return ApiResponse.success<OrderTableAssignmentDto>(
      res,
      200,
      `Order Table Assignment found with this Restaurant Table ID: ${orderTableAssignmentDto.customerOrderId}`,
      orderTableAssignmentDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const orderTableAssignmentDtos: OrderTableAssignmentDto[] = await this.orderTableAssignmentService.getAll();

    return ApiResponse.success<OrderTableAssignmentDto[]>(
      res,
      200,
      `Order Table Assignments found`,
      orderTableAssignmentDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateOrderTableAssignmentDto;

    const craetedOrderTableAssignmentDto: OrderTableAssignmentDto =
      await this.orderTableAssignmentService.create(payload);

    return ApiResponse.success<OrderTableAssignmentDto>(
      res,
      201,
      `Order Table Assignment created with Customer ID: ${craetedOrderTableAssignmentDto.customerOrderId}`,
      craetedOrderTableAssignmentDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateOrderTableAssignmentDto[];

    const craetedOrderTableAssignmentDtos: OrderTableAssignmentDto[] =
      await this.orderTableAssignmentService.createMany(payload);

    return ApiResponse.success<OrderTableAssignmentDto[]>(
      res,
      201,
      `Order Table Assignments are created`,
      craetedOrderTableAssignmentDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const customerOrderId: number = Number(req.params.customerOrderId);
    const payload: UpdateOrderTableAssignmentDto = req.body;
    payload.customerOrderId = customerOrderId;

    const updatedOrderTableAssignmentDto = await this.orderTableAssignmentService.update(payload);

    return ApiResponse.success<OrderTableAssignmentDto>(
      res,
      200,
      `Order Table Assignment updated with Customer ID: ${updatedOrderTableAssignmentDto.customerOrderId}`,
      updatedOrderTableAssignmentDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateOrderTableAssignmentDto[];

    const updatedOrderTableAssignmentDtos: OrderTableAssignmentDto[] =
      await this.orderTableAssignmentService.updateMany(payload);

    return ApiResponse.success<OrderTableAssignmentDto[]>(
      res,
      200,
      `Order Table Assignments are updated`,
      updatedOrderTableAssignmentDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const customerOrderId: number = Number(req.params.customerOrderId);

    const deletedId: number = await this.orderTableAssignmentService.delete(customerOrderId);

    return ApiResponse.success<void>(
      res,
      200,
      `Order Table Assignment is deleted with Customer ID: ${deletedId}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    const deletedIds: number[] = await this.orderTableAssignmentService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Order Table Assignments are deleted with Customer IDs: ${deletedIds}`,
    );
  }
}

export default OrderTableAssignmentController;
