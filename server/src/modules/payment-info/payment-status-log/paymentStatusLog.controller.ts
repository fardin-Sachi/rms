import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/libs/apiResponse.js';
import type {CreatePaymentStatusLogDto} from "./dtos/createPaymentStatusLog.dto.js";
import type {UpdatePaymentStatusLogDto} from "./dtos/updatePaymentStatusLog.dto.js";
import type {PaymentStatusLogDto} from "./dtos/paymentStatusLog.dto.js";
import PaymentStatusLogService from "./paymentStatusLog.service.js";

class PaymentStatusLogController {
  private readonly pymentStatusLogService: PaymentStatusLogService;
  constructor(private readonly logger: ILogger) {
    this.pymentStatusLogService = new PaymentStatusLogService(logger);

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

    const pymentStatusLogDto: PaymentStatusLogDto | null = await this.pymentStatusLogService.get(id);

    if (!pymentStatusLogDto) {
      return ApiResponse.error(
        res,
        404,
        `No payment Status Log found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<PaymentStatusLogDto>(
      res,
      200,
      `Payment Status Log found with this ID: ${pymentStatusLogDto.id}`,
      pymentStatusLogDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const pymentStatusLogDtos: PaymentStatusLogDto[] = await this.pymentStatusLogService.getAll();

    return ApiResponse.success<PaymentStatusLogDto[]>(
      res,
      200,
      `Payment Status Logs found`,
      pymentStatusLogDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreatePaymentStatusLogDto;

    const createdpaymentStatusLogDto: PaymentStatusLogDto =
      await this.pymentStatusLogService.create(payload);

    return ApiResponse.success<PaymentStatusLogDto>(
      res,
      201,
      `Payment Status Log created with ID: ${createdpaymentStatusLogDto.id}`,
      createdpaymentStatusLogDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreatePaymentStatusLogDto[];

    const createdPaymentStatusLogDtos: PaymentStatusLogDto[] =
      await this.pymentStatusLogService.createMany(payload);

    return ApiResponse.success<PaymentStatusLogDto[]>(
      res,
      201,
      `Payment Status Logs are created`,
      createdPaymentStatusLogDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdatePaymentStatusLogDto = req.body;
    payload.id = id;

    const updatedpaymentStatusLogDto = await this.pymentStatusLogService.update(payload);

    return ApiResponse.success<PaymentStatusLogDto>(
      res,
      200,
      `Payment Status Log updated with ID: ${updatedpaymentStatusLogDto.id}`,
      updatedpaymentStatusLogDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdatePaymentStatusLogDto[];

    const updatedPaymentStatusLogDtos: PaymentStatusLogDto[] =
      await this.pymentStatusLogService.updateMany(payload);

    return ApiResponse.success<PaymentStatusLogDto[]>(
      res,
      200,
      `Payment Status Logs are updated`,
      updatedPaymentStatusLogDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    const deletedId: number = await this.pymentStatusLogService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Payment Status Log is deleted with ID: ${deletedId}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    const deletedIds: number[] = await this.pymentStatusLogService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Payment Status Logs are deleted with IDs: ${deletedIds}`,
    );
  }
}

export default PaymentStatusLogController;
