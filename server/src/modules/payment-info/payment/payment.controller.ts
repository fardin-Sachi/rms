import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import type { PaymentDto } from './dtos/payment.dto.js';
import type { UpdatePaymentDto } from './dtos/updatePayment.dto.js';
import type { CreatePaymentDto } from './dtos/createPayment.dto.js';
import PaymentService from './payment.service.js';
import { ApiResponse } from '../../../shared/utils/apiResponse.js';

class PaymentController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: PaymentService,
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

    const paymentDto: PaymentDto | null = await this.mService.get(id);

    if (!paymentDto) {
      return ApiResponse.error(
        res,
        404,
        `No payment found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<PaymentDto>(
      res,
      200,
      `Payment found with this ID: ${paymentDto.id}`,
      paymentDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const paymentDtos: PaymentDto[] = await this.mService.getAll();

    return ApiResponse.success<PaymentDto[]>(
      res,
      200,
      `Payments found`,
      paymentDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreatePaymentDto;

    const createdPaymentDto: PaymentDto = await this.mService.create(payload);

    return ApiResponse.success<PaymentDto>(
      res,
      201,
      `Payment created with ID: ${createdPaymentDto.id}`,
      createdPaymentDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreatePaymentDto[];

    const createdPaymentDtos: PaymentDto[] =
      await this.mService.createMany(payload);

    return ApiResponse.success<PaymentDto[]>(
      res,
      201,
      `Payments are created`,
      createdPaymentDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdatePaymentDto = req.body;
    payload.id = id;

    const updatedPaymentDto = await this.mService.update(payload);

    return ApiResponse.success<PaymentDto>(
      res,
      200,
      `Payment updated with ID: ${updatedPaymentDto.id}`,
      updatedPaymentDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdatePaymentDto[];

    const updatedPaymentDtos: PaymentDto[] =
      await this.mService.updateMany(payload);

    return ApiResponse.success<PaymentDto[]>(
      res,
      200,
      `Payments are updated`,
      updatedPaymentDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    await this.mService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Payment is deleted with ID: ${id}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    await this.mService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Payments are deleted with IDs: ${ids}`,
    );
  }
}

export default PaymentController;
