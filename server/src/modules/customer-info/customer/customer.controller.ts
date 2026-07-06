import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import type { CustomerDto } from './dtos/customer.dto.js';
import { ApiResponse } from '../../../shared/utils/apiResponse.js';
import CustomerService from './customer.service.js';
import type CreateCustomerDto from './dtos/createCustomer.dto.js';
import type UpdateCustomerDto from './dtos/updateCustomer.dto.js';

class CustomerController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: CustomerService,
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

    const customerDto: CustomerDto | null = await this.mService.get(id);

    if (!customerDto) {
      return ApiResponse.error(
        res,
        404,
        `No customer found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<CustomerDto>(
      res,
      200,
      `Customer found with this ID: ${customerDto.id}`,
      customerDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const customerDtos: CustomerDto[] = await this.mService.getAll();

    return ApiResponse.success<CustomerDto[]>(
      res,
      200,
      `Customers found`,
      customerDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateCustomerDto;

    const createdCustomer: CustomerDto = await this.mService.create(payload);

    return ApiResponse.success<CustomerDto>(
      res,
      201,
      `Customer created with ID: ${createdCustomer.id}`,
      createdCustomer,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateCustomerDto[];

    const createdCustomerDtos: CustomerDto[] =
      await this.mService.createMany(payload);

    return ApiResponse.success<CustomerDto[]>(
      res,
      201,
      `Customers are created`,
      createdCustomerDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdateCustomerDto = req.body;
    payload.id = id;

    const updatedCustomerDto: CustomerDto = await this.mService.update(payload);

    return ApiResponse.success<CustomerDto>(
      res,
      200,
      `Customer updated with ID: ${updatedCustomerDto.id}`,
      updatedCustomerDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateCustomerDto[];

    const updatedCustomerDtos: CustomerDto[] =
      await this.mService.updateMany(payload);

    return ApiResponse.success<CustomerDto[]>(
      res,
      200,
      `Customers are updated`,
      updatedCustomerDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    await this.mService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Customer is deleted with ID: ${id}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    await this.mService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Customers are deleted with IDs: ${ids}`,
    );
  }
}

export default CustomerController;
