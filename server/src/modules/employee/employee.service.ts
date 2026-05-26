import type { ILogger } from '../../shared/interfaces/logger.interface.js';
import EmployeeRepository from './employee.repository.js';
import type CreateEmployeeDto from './dtos/createEmployee.dto.js';
import type UpdateEmployeeDto from './dtos/updateEmployee.dto.js';
import type { EmployeeDto } from './dtos/employee.dtos.js';
import type { EmployeeRoleDto } from './dtos/empRole.dto.js';
import type { EmployeeAddressDto } from './dtos/empAddress.dto.js';
import type {EmployeeRecordDto} from "./dtos/empRecord.dto.js";

class EmployeeService {

  private readonly employeeRepository: EmployeeRepository;

  constructor(private readonly logger: ILogger) {
    this.employeeRepository = new EmployeeRepository();
  }

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

  async getEmployeeRole(pEmployeeId: number): Promise<EmployeeRoleDto> {
    return this.employeeRepository.getEmployeeRole(pEmployeeId);
  }

  async createEmployeeRole(
    pMutable: EmployeeRoleDto,
  ): Promise<EmployeeRoleDto> {
    return this.employeeRepository.createEmployeeRole(pMutable);
  }

  async updateEmployeeRole(
    pMutable: EmployeeRoleDto,
  ): Promise<EmployeeRoleDto> {
    return this.employeeRepository.updateEmployeeRole(pMutable);
  }

  async getEmployeeAddress(pEmployeeId: number): Promise<EmployeeAddressDto> {
    return this.employeeRepository.getEmployeeAddress(pEmployeeId);
  }

  async createEmployeeAddress(
    pMutable: EmployeeAddressDto,
  ): Promise<EmployeeAddressDto> {
    return this.employeeRepository.createEmployeeAddress(pMutable);
  }

  async updateEmployeeAddress(
    pMutable: EmployeeAddressDto,
  ): Promise<EmployeeAddressDto> {
    return this.employeeRepository.updateEmployeeAddress(pMutable);
  }

  async getSingleEmployeeData(employeeId: number): Promise<EmployeeRecordDto | null> {
    return this.employeeRepository.getSingleEmployeeData(employeeId);
  }

}

export default EmployeeService;
