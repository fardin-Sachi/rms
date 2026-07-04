import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type CreateEmployeeDto from './dtos/createEmployee.dto.js';
import type UpdateEmployeeDto from './dtos/updateEmployee.dto.js';
import type { EmployeeDto } from './dtos/employee.dto.js';
import type { EmployeeRoleDto } from './dtos/empRole.dto.js';
import type { EmployeeAddressDto } from './dtos/empAddress.dto.js';
import type { EmployeeRecordDto } from './dtos/empRecord.dto.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type EmployeeRepository from './employee.repository.js';

class EmployeeService extends BaseService<
  EmployeeDto,
  CreateEmployeeDto,
  UpdateEmployeeDto,
  number,
  EmployeeRepository
> {
  constructor(mLogger: ILogger, mRepository: EmployeeRepository) {
    super(mLogger, mRepository);
  }

  async getEmployeeRole(pEmployeeId: number): Promise<EmployeeRoleDto> {
    return this.mRepository.getEmployeeRole(pEmployeeId);
  }

  async createEmployeeRole(
    pMutable: EmployeeRoleDto,
  ): Promise<EmployeeRoleDto> {
    return this.mRepository.createEmployeeRole(pMutable);
  }

  async updateEmployeeRole(
    pMutable: EmployeeRoleDto,
  ): Promise<EmployeeRoleDto> {
    return this.mRepository.updateEmployeeRole(pMutable);
  }

  async getEmployeeAddress(pEmployeeId: number): Promise<EmployeeAddressDto> {
    return this.mRepository.getEmployeeAddress(pEmployeeId);
  }

  async createEmployeeAddress(
    pMutable: EmployeeAddressDto,
  ): Promise<EmployeeAddressDto> {
    return this.mRepository.createEmployeeAddress(pMutable);
  }

  async updateEmployeeAddress(
    pMutable: EmployeeAddressDto,
  ): Promise<EmployeeAddressDto> {
    return this.mRepository.updateEmployeeAddress(pMutable);
  }

  async getSingleEmployeeData(
    employeeId: number,
  ): Promise<EmployeeRecordDto | null> {
    return this.mRepository.getSingleEmployeeData(employeeId);
  }
}

export default EmployeeService;
