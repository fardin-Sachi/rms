import type { ILogger } from '../../shared/interfaces/logger.interface.js';
import type EmployeeRepository from "./employee.repository.js";
import type CreateEmployeeDto from "./dtos/createEmployee.dto.js";
import type UpdateEmployeeDto from "./dtos/updateEmployee.dto.js";
import type {EmployeeDto} from "./dtos/employee.dtos.js";

export class EmployeeService {
    constructor(
        private readonly logger: ILogger,
        private readonly employeeRepository: EmployeeRepository,
    ) {}

    async get(id: number): Promise<EmployeeDto | null> {
        return this.employeeRepository.get(id);
    }

    async getAll(): Promise<EmployeeDto[]> {
        return this.employeeRepository.getAll();
    }

    async create(pMutable: CreateEmployeeDto): Promise<EmployeeDto> {
        return this.employeeRepository.create(pMutable);
    }

    async createMany(pMutableList: CreateEmployeeDto[]): Promise<EmployeeDto[]> {
        return this.employeeRepository.createMany(pMutableList);
    }

    async update(pMutable: UpdateEmployeeDto): Promise<EmployeeDto> {
        return this.employeeRepository.update(pMutable);
    }

    async updateMany(pMutableList: UpdateEmployeeDto[]): Promise<EmployeeDto[]> {
        return this.employeeRepository.updateMany(pMutableList);
    }

    async delete(id: number): Promise<number> {
        return this.employeeRepository.delete(id);
    }

    async deleteMany(ids: number[]): Promise<number[]> {
        return this.employeeRepository.deleteMany(ids);
    }
}
