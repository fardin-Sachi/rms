import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import EmployeeService from './employee.service.js';
import type { Request, Response } from 'express';
import type CreateEmployeeDto from './dtos/createEmployee.dto.js';
import type UpdateEmployeeDto from './dtos/updateEmployee.dto.js';
import type { EmployeeDto } from './dtos/employee.dto.js';
import { ApiResponse } from '../../../shared/utils/apiResponse.js';
import type { EmployeeRoleDto } from './dtos/empRole.dto.js';
import type { EmployeeAddressDto } from './dtos/empAddress.dto.js';
import type { EmployeeRecordDto } from './dtos/empRecord.dto.js';

class EmployeeController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: EmployeeService,
  ) {
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.createMany = this.createMany.bind(this);
    this.update = this.update.bind(this);
    this.updateMany = this.updateMany.bind(this);
    this.delete = this.delete.bind(this);
    this.deleteMany = this.deleteMany.bind(this);
    this.getEmployeeRole = this.getEmployeeRole.bind(this);
    this.createEmployeeRole = this.createEmployeeRole.bind(this);
    this.updateEmployeeRole = this.updateEmployeeRole.bind(this);
    this.getEmployeeAddress = this.getEmployeeAddress.bind(this);
    this.createEmployeeAddress = this.createEmployeeAddress.bind(this);
    this.updateEmployeeAddress = this.updateEmployeeAddress.bind(this);
    this.getSingleEmployeeData = this.getSingleEmployeeData.bind(this);
  }

  async get(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    const employeeDto: EmployeeDto | null = await this.mService.get(id);

    if (!employeeDto) {
      return ApiResponse.error(
        res,
        404,
        `No employee found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<EmployeeDto>(
      res,
      200,
      `Employee found with this ID: ${employeeDto.id}`,
      employeeDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const employeeDtos: EmployeeDto[] = await this.mService.getAll();

    return ApiResponse.success<EmployeeDto[]>(
      res,
      200,
      `Employees found`,
      employeeDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateEmployeeDto;

    const createdEmployeeDto: EmployeeDto = await this.mService.create(payload);

    return ApiResponse.success<EmployeeDto>(
      res,
      201,
      `Employee created with ID: ${createdEmployeeDto.id}`,
      createdEmployeeDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateEmployeeDto[];

    const createdEmployeeDtos: EmployeeDto[] =
      await this.mService.createMany(payload);

    return ApiResponse.success<EmployeeDto[]>(
      res,
      201,
      `Employees are created`,
      createdEmployeeDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: UpdateEmployeeDto = req.body;
    payload.id = id;

    const updatedEmployeeDto = await this.mService.update(payload);

    return ApiResponse.success<EmployeeDto>(
      res,
      200,
      `Employee updated with ID: ${updatedEmployeeDto.id}`,
      updatedEmployeeDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateEmployeeDto[];

    const updatedEmployeeDtos: EmployeeDto[] =
      await this.mService.updateMany(payload);

    return ApiResponse.success<EmployeeDto[]>(
      res,
      200,
      `Employees are updated`,
      updatedEmployeeDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    await this.mService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Employee is deleted with ID: ${id}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    await this.mService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Employees are deleted with IDs: ${ids}`,
    );
  }

  async getEmployeeRole(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    const employeeRoleDto: EmployeeRoleDto =
      await this.mService.getEmployeeRole(id);

    return ApiResponse.success<EmployeeRoleDto>(
      res,
      200,
      `Employee role found for Employee ID: ${employeeRoleDto.employeeId}`,
      employeeRoleDto,
    );
  }

  async createEmployeeRole(req: Request, res: Response): Promise<Response> {
    const payload = req.body as EmployeeRoleDto;

    const employeeRoleDto: EmployeeRoleDto =
      await this.mService.createEmployeeRole(payload);
    return ApiResponse.success<EmployeeRoleDto>(
      res,
      201,
      `Employee role created for Employee ID: ${employeeRoleDto.employeeId}`,
      employeeRoleDto,
    );
  }

  async updateEmployeeRole(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: EmployeeRoleDto = req.body;
    payload.employeeId = id;

    const employeeRoleDto: EmployeeRoleDto =
      await this.mService.updateEmployeeRole(payload);

    return ApiResponse.success<EmployeeRoleDto>(
      res,
      200,
      `Employee role updated with ID: ${employeeRoleDto.employeeId}`,
      employeeRoleDto,
    );
  }

  async getEmployeeAddress(req: Request, res: Response): Promise<Response> {
    const id = Number(req.params.id);

    const employeeAddressDto: EmployeeAddressDto =
      await this.mService.getEmployeeAddress(id);

    return ApiResponse.success<EmployeeAddressDto>(
      res,
      200,
      `Employee address found for Employee ID: ${employeeAddressDto.employeeId}`,
      employeeAddressDto,
    );
  }

  async createEmployeeAddress(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload = req.body as EmployeeAddressDto;
    payload.employeeId = id;

    const employeeAddressDto: EmployeeAddressDto =
      await this.mService.createEmployeeAddress(payload);

    return ApiResponse.success<EmployeeAddressDto>(
      res,
      201,
      `Employee address created for Employee ID: ${employeeAddressDto.employeeId}`,
      employeeAddressDto,
    );
  }

  async updateEmployeeAddress(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);
    const payload: EmployeeAddressDto = req.body;
    payload.employeeId = id;

    const employeeAddressDto: EmployeeAddressDto =
      await this.mService.updateEmployeeAddress(payload);

    return ApiResponse.success<EmployeeAddressDto>(
      res,
      200,
      `Employee address updated with ID: ${employeeAddressDto.employeeId}`,
      employeeAddressDto,
    );
  }

  async getSingleEmployeeData(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.id);

    const employeeRecordDto: EmployeeRecordDto | null =
      await this.mService.getSingleEmployeeData(id);

    if (!employeeRecordDto) {
      return ApiResponse.error(
        res,
        404,
        `No employee found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<EmployeeRecordDto>(
      res,
      200,
      `Employee found with this ID: ${employeeRecordDto.id}`,
      employeeRecordDto,
    );
  }
}

export default EmployeeController;
