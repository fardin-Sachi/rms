import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/libs/apiResponse.js';
import type {CustomerOrderDto} from "./dtos/customerOrder.dto.js";
import type {CreateCustomerOrderDto} from "./dtos/createCustomerOrder.dto.js";
import type {UpdateCustomerOrderDto} from "./dtos/updateCustomerOrder.dto.js";
import CustomerOrderService from "./customerOrder.service.js";

class CustomerOrderController {
  private readonly customerOrderService: CustomerOrderService;
  constructor(private readonly logger: ILogger) {
    this.customerOrderService = new CustomerOrderService(logger);

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

    const customerOrderDto: CustomerOrderDto | null = await this.customerOrderService.get(id);

    if (!customerOrderDto) {
      return ApiResponse.error(
        res,
        404,
        `No customer order found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<CustomerOrderDto>(
      res,
      200,
      `Customer Order found with this ID: ${customerOrderDto.id}`,
      customerOrderDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const customerOrderDtos: CustomerOrderDto[] = await this.customerOrderService.getAll();

    return ApiResponse.success<CustomerOrderDto[]>(
      res,
      200,
      `Customer Orders found`,
      customerOrderDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateCustomerOrderDto;

    const createdCustomerOrderDto: CustomerOrderDto =
      await this.customerOrderService.create(payload);

    return ApiResponse.success<CustomerOrderDto>(
      res,
      201,
      `Customer Order created with ID: ${createdCustomerOrderDto.id}`,
      createdCustomerOrderDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateCustomerOrderDto[];

    const createdCustomerOrderDtos: CustomerOrderDto[] =
      await this.customerOrderService.createMany(payload);

    return ApiResponse.success<CustomerOrderDto[]>(
      res,
      201,
      `Customer Orders are created`,
      createdCustomerOrderDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdateCustomerOrderDto = req.body;
    payload.id = id;

    const updatedCustomerOrderDto: CustomerOrderDto = await this.customerOrderService.update(payload);

    return ApiResponse.success<CustomerOrderDto>(
      res,
      200,
      `Customer Order updated with ID: ${updatedCustomerOrderDto.id}`,
      updatedCustomerOrderDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateCustomerOrderDto[];

    const updatedCustomerOrderDtos: CustomerOrderDto[] =
      await this.customerOrderService.updateMany(payload);

    return ApiResponse.success<CustomerOrderDto[]>(
      res,
      200,
      `Customer Orders are updated`,
      updatedCustomerOrderDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    const deletedId: number = await this.customerOrderService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Customer Order is deleted with ID: ${deletedId}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    const deletedIds: number[] = await this.customerOrderService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Customer Orders are deleted with IDs: ${deletedIds}`,
    );
  }
}

export default CustomerOrderController;
