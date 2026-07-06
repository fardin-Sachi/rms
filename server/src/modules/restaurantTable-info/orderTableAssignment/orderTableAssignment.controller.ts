import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import type { OrderTableAssignmentDto } from './dtos/orderTableAssignment.dto.js';
import OrderTableAssignmentService from './orderTableAssignment.service.js';
import type { CreateOrderTableAssignmentDto } from './dtos/createOrderTableAssignment.dto.js';
import type { UpdateOrderTableAssignmentDto } from './dtos/updateOrderTableAssignment.dto.js';
import { ApiResponse } from '../../../shared/utils/apiResponse.js';

class OrderTableAssignmentController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: OrderTableAssignmentService,
  ) {
    this.assign = this.assign.bind(this);
    this.getByOrderId = this.getByOrderId.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.replace = this.replace.bind(this);
  }

  async assign(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateOrderTableAssignmentDto;

    await this.mService.assign(payload);

    return ApiResponse.success<void>(res, 201, 'Table assigned to order');
  }

  async getByOrderId(req: Request, res: Response): Promise<Response> {
    const orderId = Number(req.params.orderId);

    const data = await this.mService.getByOrderId(orderId);

    return ApiResponse.success<OrderTableAssignmentDto[]>(
      res,
      200,
      'Assignments fetched successfully',
      data,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateOrderTableAssignmentDto;

    await this.mService.update(payload);

    return ApiResponse.success<void>(res, 200, 'Assignment updated');
  }

  async remove(req: Request, res: Response): Promise<Response> {
    const payload = req.body as OrderTableAssignmentDto;

    await this.mService.remove(payload);

    return ApiResponse.success<void>(res, 200, 'Assignment removed');
  }

  async replace(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateOrderTableAssignmentDto;

    await this.mService.replace(payload);

    return ApiResponse.success<void>(res, 200, 'Assignment replaced');
  }
}

export default OrderTableAssignmentController;
