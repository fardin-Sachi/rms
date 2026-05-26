import type { ILogger } from '../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import type { CustomerDto } from './dtos/customer.dto.js';
import { ApiResponse } from '../../shared/libs/apiResponse.js';
import CustomerService from "./customer.service.js";
import type CreateCustomerDto from "./dtos/createCustomer.dto.js";
import type UpdateCustomerDto from "./dtos/updateCustomer.dto.js";

class CustomerController {

  private readonly customerService: CustomerService;
  constructor(private readonly logger: ILogger) {
    this.customerService = new CustomerService(logger);

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
    const customerId: number = Number(req.params.customerId);

    const customerDto: CustomerDto | null = await this.customerService.get(customerId);

    if (!customerDto) {
      return ApiResponse.error(
        res,
        404,
        `No customer found with this ID: ${customerId}`,
      );
    }

    return ApiResponse.success<CustomerDto>(
      res,
      200,
      `Customer found with this ID: ${customerId}`,
      customerDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const customerDtos: CustomerDto[] = await this.customerService.getAll();

    return ApiResponse.success<CustomerDto[]>(
      res,
      200,
      `Customers found`,
      customerDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateCustomerDto;

    const createdCustomer: CustomerDto = await this.customerService.create(payload);

    return ApiResponse.success<CustomerDto>(
      res,
      201,
      `Customer created with ID: ${createdCustomer.id}`,
      createdCustomer,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateCustomerDto[];

    const createdCustomerDtos: CustomerDto[] = await this.customerService.createMany(payload);

    return ApiResponse.success<CustomerDto[]>(
      res,
      201,
      `Customers are created`,
      createdCustomerDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const customerId: number = Number(req.params.customerId);
    const payload: UpdateCustomerDto = req.body;
    payload.id = customerId;

    const updatedCustomerDto: CustomerDto = await this.customerService.update(payload);

    return ApiResponse.success<CustomerDto>(
      res,
      200,
      `Customer updated with ID: ${updatedCustomerDto.id}`,
      updatedCustomerDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateCustomerDto[];

    const updatedCustomerDtos: CustomerDto[] = await this.customerService.updateMany(payload);

    return ApiResponse.success<CustomerDto[]>(
      res,
      200,
      `Customers are updated`,
      updatedCustomerDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.customerId);

    const deletedId: number = await this.customerService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Customer is deleted with ID: ${deletedId}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    const deletedIds = await this.customerService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Customers are deleted with IDs: ${deletedIds}`,
    );
  }

}

export default CustomerController;
