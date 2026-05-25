import type { ILogger } from '../../shared/interfaces/logger.interface.js';
import type {EmployeeService} from "./employee.service.js";
import type {Request, Response} from "express";
import type CreateEmployeeDto from "./dtos/createEmployee.dto.js";
import type UpdateEmployeeDto from "./dtos/updateEmployee.dto.js";
import type {EmployeeDto} from "./dtos/employee.dtos.js";
import {ApiResponse} from "../../shared/libs/apiResponse.js";

class EmployeeController {
    constructor(
        private readonly logger: ILogger,
        private readonly employeeService: EmployeeService,
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

        const employee: EmployeeDto | null = await this.employeeService.get(id);

        if (!employee) {
            return ApiResponse
                .error(
                    res,
                    404,
                    `No employee found with this ID: ${id}`
                );
        }

        return ApiResponse
            .success<EmployeeDto>(
                res,
                200,
                `Employee found with this ID: ${id}`,
                employee
            );
    }

    async getAll(
        _req: Request,
        res: Response
    ): Promise<Response> {
        const employees = await this.employeeService.getAll();

        return ApiResponse
            .success<EmployeeDto[]>(
                res,
                200,
                `Employees found`,
                employees
            );
    }

    async create(
        req: Request,
        res: Response
    ): Promise<Response> {
        const payload = req.body as CreateEmployeeDto;

        const employee = await this.employeeService.create(payload);

        return ApiResponse
            .success<EmployeeDto>(
                res,
                201,
                `Employee created with ID: ${employee.id}`,
                employee
            );
    }

    async createMany(
        req: Request,
        res: Response
    ): Promise<Response> {
        const payload = req.body as CreateEmployeeDto[];

        const employees: EmployeeDto[] = await this.employeeService.createMany(payload);

        return ApiResponse
            .success<EmployeeDto[]>(
                res,
                201,
                `Employees are created`,
                employees
            );
    }

    async update(
        req: Request,
        res: Response
    ): Promise<Response> {

        const id: number = Number(req.params.id);
        const payload: UpdateEmployeeDto = req.body;
        payload.id = id;

        const employee = await this.employeeService.update(payload);

        return ApiResponse
            .success<EmployeeDto>(
                res,
                200,
                `Employee updated with ID: ${employee.id}`,
                employee
            );
    }

    async updateMany(
        req: Request,
        res: Response
    ): Promise<Response> {
        const payload = req.body as UpdateEmployeeDto[];

        const employees = await this.employeeService.updateMany(payload);

        return ApiResponse
            .success<EmployeeDto[]>(
                res,
                200,
                `Employees are updated`,
                employees
            );
    }

    async delete(
        req: Request,
        res: Response
    ): Promise<Response> {
        const id: number = Number(req.params.id);

        const deletedId: number = await this.employeeService.delete(id);

        return ApiResponse
            .success<void>(
                res,
                200,
                `Employee is deleted with ID: ${deletedId}`,
            );
    }

    async deleteMany(
        req: Request,
        res: Response
    ): Promise<Response> {
        const ids = req.body as number[];

        const deletedIds = await this.employeeService.deleteMany(ids);

        return ApiResponse
            .success<void>(
                res,
                200,
                `Employees are deleted with IDs: ${deletedIds}`,
            );
    }

}

export default EmployeeController;