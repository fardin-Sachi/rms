import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type CreateEmployeeDto from './dtos/createEmployee.dto.js';
import type UpdateEmployeeDto from './dtos/updateEmployee.dto.js';
import type { EmployeeDto } from './dtos/employee.dto.js';
import type { EmployeeRoleDto } from './dtos/empRole.dto.js';
import type { EmployeeAddressDto } from './dtos/empAddress.dto.js';
import type { EmployeeRecordDto } from './dtos/empRecord.dto.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type EmployeeRepository from './employee.repository.js';
import EmployeeRoleMapper from './mappers/employeeRole.mapper.js';
import type EmployeeEntity from './entities/employee.entity.js';
import type EmployeeMapper from './mappers/employee.mapper.js';

class EmployeeService extends BaseService<
  EmployeeDto,
  CreateEmployeeDto,
  UpdateEmployeeDto,
  EmployeeEntity,
  number,
  EmployeeRepository
> {
  constructor(
    mLogger: ILogger,
    mRepository: EmployeeRepository,
    mMapper: EmployeeMapper,
  ) {
    super(mLogger, mRepository, mMapper);
  }

  async getEmployeeRole(pEmployeeId: number): Promise<EmployeeRoleDto | null> {
    const entity = await this.mRepository.getEmployeeRole(pEmployeeId);

    if (!entity) return null;

    return EmployeeRoleMapper.toDto(entity);
  }

  async createEmployeeRole(
    pMutable: EmployeeRoleDto,
  ): Promise<EmployeeRoleDto> {
    const entity = EmployeeRoleMapper.toEntity(pMutable);

    const created = await this.mRepository.createEmployeeRole(entity);

    return EmployeeRoleMapper.toDto(created);
  }

  async updateEmployeeRole(
    pMutable: EmployeeRoleDto,
  ): Promise<EmployeeRoleDto> {
    const entity = EmployeeRoleMapper.toEntity(pMutable);

    const updated = await this.mRepository.updateEmployeeRole(entity);

    return EmployeeRoleMapper.toDto(updated);
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
