import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/utils/apiResponse.js';
import EmployeeSalaryService from './empSalary.service.js';
import type UpdateEmpSalaryDto from './dtos/updateEmpSalary.dto.js';
import type CreateEmpSalaryDto from './dtos/createEmpSalary.dto.js';
import type EmpSalaryDto from './dtos/empSalary.dto.js';

class EmployeeSalaryController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: EmployeeSalaryService,
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

    const employeeSalaryDto: EmpSalaryDto | null = await this.mService.get(id);

    if (!employeeSalaryDto) {
      return ApiResponse.error(
        res,
        404,
        `No employee salary found with this ID: ${id}`,
      );
    }

    return ApiResponse.success<EmpSalaryDto>(
      res,
      200,
      `Employee salary found with this ID: ${id}`,
      employeeSalaryDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const employeeSalaryDtos = await this.mService.getAll();

    return ApiResponse.success<EmpSalaryDto[]>(
      res,
      200,
      `Employee salaries found`,
      employeeSalaryDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const employeeId: number = Number(req.params.employeeId);
    const payload = req.body as CreateEmpSalaryDto;
    payload.employeeId = employeeId;

    const createdEmployeeSalaryDto: EmpSalaryDto =
      await this.mService.create(payload);

    return ApiResponse.success<EmpSalaryDto>(
      res,
      201,
      `Employee salary created with ID: ${createdEmployeeSalaryDto.id}`,
      createdEmployeeSalaryDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateEmpSalaryDto[];

    const createdEmployeeSalaryDtos: EmpSalaryDto[] =
      await this.mService.createMany(payload);

    return ApiResponse.success<EmpSalaryDto[]>(
      res,
      201,
      `Employee salaries are created`,
      createdEmployeeSalaryDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const employeeId: number = Number(req.params.employeeId);
    const payload: UpdateEmpSalaryDto = req.body;
    payload.employeeId = employeeId;

    const updatedEmployeeSalaryDto = await this.mService.update(payload);

    return ApiResponse.success<EmpSalaryDto>(
      res,
      200,
      `Employee salary updated for ID: ${updatedEmployeeSalaryDto.employeeId}`,
      updatedEmployeeSalaryDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateEmpSalaryDto[];

    const updatedEmployeeSalaryDtos = await this.mService.updateMany(payload);

    return ApiResponse.success<EmpSalaryDto[]>(
      res,
      200,
      `Employee salaries are updated`,
      updatedEmployeeSalaryDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id: number = Number(req.params.employeeId);

    await this.mService.delete(id);

    return ApiResponse.success<void>(
      res,
      200,
      `Employee salary is deleted with ID: ${id}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    const deletedIds = await this.mService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Employee salaries are deleted with IDs: ${deletedIds}`,
    );
  }
}

export default EmployeeSalaryController;
