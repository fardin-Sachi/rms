import type { ILogger } from '../../shared/interfaces/logger.interface.js';
import EmployeeService from './employee.service.js';
import type { Request, Response } from 'express';
import type CreateEmployeeDto from './dtos/createEmployee.dto.js';
import type UpdateEmployeeDto from './dtos/updateEmployee.dto.js';
import type { EmployeeDto } from './dtos/employee.dtos.js';
import { ApiResponse } from '../../shared/libs/apiResponse.js';
import type { EmployeeRoleDto } from './dtos/empRole.dto.js';
import type { EmployeeAddressDto } from './dtos/empAddress.dto.js';
import type {EmployeeRecordDto} from "./dtos/empRecord.dto.js";

class EmployeeController {

  private readonly employeeService: EmployeeService;
  constructor(private readonly logger: ILogger) {
    this.employeeService = new EmployeeService(logger);

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
    const id: number = Number(req.params.employeeId);

    const employeeDto: EmployeeDto | null = await this.employeeService.get(id);

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
      `Employee found with this ID: ${id}`,
      employeeDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const employees = await this.employeeService.getAll();

    return ApiResponse.success<EmployeeDto[]>(
      res,
      200,
      `Employees found`,
      employees,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateEmployeeDto;

    const employee = await this.employeeService.create(payload);

    return ApiResponse.success<EmployeeDto>(
      res,
      201,
      `Employee created with ID: ${employee.id}`,
      employee,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateEmployeeDto[];

    const employees: EmployeeDto[] =
      await this.employeeService.createMany(payload);

    return ApiResponse.success<EmployeeDto[]>(
      res,
      201,
      `Employees are created`,
      employees,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.employeeId);
    const payload: UpdateEmployeeDto = req.body;
    payload.id = id;

    const employee = await this.employeeService.update(payload);

    return ApiResponse.success<EmployeeDto>(
      res,
      200,
      `Employee updated with ID: ${employee.id}`,
      employee,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateEmployeeDto[];

    const employees = await this.employeeService.updateMany(payload);

    return ApiResponse.success<EmployeeDto[]>(
      res,
      200,
      `Employees are updated`,
      employees,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.employeeId);

    const deletedId: number = await this.employeeService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Employee is deleted with ID: ${deletedId}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    const deletedIds = await this.employeeService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Employees are deleted with IDs: ${deletedIds}`,
    );
  }

  async getEmployeeRole(req: Request, res: Response): Promise<Response> {
    const pEmployeeId = Number(req.params.employeeId);

    const employeeRoleDto: EmployeeRoleDto =
      await this.employeeService.getEmployeeRole(pEmployeeId);

    return ApiResponse.success<EmployeeRoleDto>(
      res,
      200,
      `Employee role found for Employee ID: ${pEmployeeId}`,
      employeeRoleDto,
    );
  }

  async createEmployeeRole(req: Request, res: Response): Promise<Response> {
    const payload = req.body as EmployeeRoleDto;

    const employeeRoleDto: EmployeeRoleDto =
      await this.employeeService.createEmployeeRole(payload);
    return ApiResponse.success<EmployeeRoleDto>(
      res,
      201,
      `Employee role created for Employee ID: ${employeeRoleDto.employeeId}`,
      employeeRoleDto,
    );
  }

  async updateEmployeeRole(req: Request, res: Response): Promise<Response> {
    const employeeId: number = Number(req.params.employeeId);
    const payload: EmployeeRoleDto = req.body;
    payload.employeeId = employeeId;

    const employeeRoleDto: EmployeeRoleDto =
      await this.employeeService.updateEmployeeRole(payload);

    return ApiResponse.success<EmployeeRoleDto>(
      res,
      200,
      `Employee role updated with ID: ${employeeRoleDto.employeeId}`,
      employeeRoleDto,
    );
  }

  async getEmployeeAddress(req: Request, res: Response): Promise<Response> {
    const pEmployeeId = Number(req.params.employeeId);

    const employeeAddressDto: EmployeeAddressDto =
      await this.employeeService.getEmployeeAddress(pEmployeeId);

    return ApiResponse.success<EmployeeAddressDto>(
      res,
      200,
      `Employee address found for Employee ID: ${pEmployeeId}`,
      employeeAddressDto,
    );
  }

  async createEmployeeAddress(req: Request, res: Response): Promise<Response> {
    const employeeId: number = Number(req.params.employeeId);
    const payload = req.body as EmployeeAddressDto;
    payload.employeeId = employeeId;

    const employeeAddressDto: EmployeeAddressDto =
      await this.employeeService.createEmployeeAddress(payload);

    return ApiResponse.success<EmployeeAddressDto>(
      res,
      201,
      `Employee address created for Employee ID: ${employeeAddressDto.employeeId}`,
      employeeAddressDto,
    );
  }

  async updateEmployeeAddress(req: Request, res: Response): Promise<Response> {
    const employeeId: number = Number(req.params.employeeId);
    const payload: EmployeeAddressDto = req.body;
    payload.employeeId = employeeId;

    const employeeAddressDto: EmployeeAddressDto =
      await this.employeeService.updateEmployeeAddress(payload);

    return ApiResponse.success<EmployeeAddressDto>(
      res,
      200,
      `Employee address updated with ID: ${employeeAddressDto.employeeId}`,
      employeeAddressDto,
    );
  }

  async getSingleEmployeeData(req: Request, res: Response): Promise<Response> {
    const employeeId: number = Number(req.params.employeeId);

    const employeeRecordDto: EmployeeRecordDto | null = await this.employeeService.getSingleEmployeeData(employeeId);

    if (!employeeRecordDto) {
      return ApiResponse.error(
        res,
        404,
        `No employee found with this ID: ${employeeId}`,
      );
    }

    return ApiResponse.success<EmployeeRecordDto>(
      res,
      200,
      `Employee found with this ID: ${employeeId}`,
      employeeRecordDto,
    );
  }

}

export default EmployeeController;
