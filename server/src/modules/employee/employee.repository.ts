import type IRepository from '../../shared/interfaces/repository.interface.js';
import type { EmployeeDto } from './dtos/employee.dto.js';
import type CreateEmployeeDto from './dtos/createEmployee.dto.js';
import type UpdateEmployeeDto from './dtos/updateEmployee.dto.js';
import type { EmployeeAddressDto } from './dtos/empAddress.dto.js';
import type { EmployeeRoleDto } from './dtos/empRole.dto.js';
import type { EmployeeRecordDto } from './dtos/empRecord.dto.js';
import Big from 'big.js';

class EmployeeRepository implements IRepository<
  EmployeeDto,
  CreateEmployeeDto,
  UpdateEmployeeDto,
  number
> {
  async get(_id: number): Promise<EmployeeDto | null> {
    return null;
  }

  async getAll(): Promise<EmployeeDto[]> {
    return [];
  }

  async create(pMutable: CreateEmployeeDto): Promise<EmployeeDto> {
    return {
      id: 1,
      ...pMutable,
      onVacation: pMutable.onVacation ?? true,
    };
  }

  async createMany(_pMutableList: CreateEmployeeDto[]): Promise<EmployeeDto[]> {
    return [];
  }

  async update(pMutable: UpdateEmployeeDto): Promise<EmployeeDto> {
    return {
      id: pMutable.id,
      name: pMutable.name ?? 'Employee',
      contact: pMutable.contact ?? '',
      sex: true,
      joiningDate: new Date(),
      onVacation: false,
      activeStatus: true,
    };
  }

  async updateMany(_pMutableList: UpdateEmployeeDto[]): Promise<EmployeeDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }

  async getEmployeeRole(pEmployeeId: number): Promise<EmployeeRoleDto> {
    return {
      employeeId: pEmployeeId,
      employeeRoleId: 2,
    };
  }

  async createEmployeeRole(
    pMutable: EmployeeRoleDto,
  ): Promise<EmployeeRoleDto> {
    return pMutable;
  }

  async updateEmployeeRole(
    pMutable: EmployeeRoleDto,
  ): Promise<EmployeeRoleDto> {
    return pMutable;
  }

  async getEmployeeAddress(pEmployeeId: number): Promise<EmployeeAddressDto> {
    return {
      id: 1,
      employeeId: pEmployeeId,
      country: 'Bangladesh',
    };
  }

  async createEmployeeAddress(
    pMutable: EmployeeAddressDto,
  ): Promise<EmployeeAddressDto> {
    return pMutable;
  }

  async updateEmployeeAddress(
    pMutable: EmployeeAddressDto,
  ): Promise<EmployeeAddressDto> {
    return pMutable;
  }

  async getSingleEmployeeData(
    employeeId: number,
  ): Promise<EmployeeRecordDto | null> {
    return {
      id: employeeId,
      salaryAmount: Big(10_000),
    };
  }
}

export default EmployeeRepository;
