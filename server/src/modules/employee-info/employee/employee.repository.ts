import type { EmployeeAddressDto } from './dtos/empAddress.dto.js';
import type { EmployeeRecordDto } from './dtos/empRecord.dto.js';
import Big from 'big.js';
import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Database } from '../../../infrastructures/database/index.database.js';
import type EmployeeEntity from './entities/employee.entity.js';
import EmployeeRoleEntity from './entities/employeeRole.entity.js';

/*
 * TODO: Remove Dtos from Repository layer
 * TODO: Separate EmployeeAddress and EmployeeRole as individual sub-module
 */
class EmployeeRepository extends BaseRepository<EmployeeEntity, number> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }

  async get(_id: number): Promise<EmployeeEntity | null> {
    return null;
  }

  async getAll(): Promise<EmployeeEntity[]> {
    return [];
  }

  async create(pMutable: EmployeeEntity): Promise<EmployeeEntity> {
    return pMutable;
  }

  async createMany(_pMutableList: EmployeeEntity[]): Promise<EmployeeEntity[]> {
    return [];
  }

  async update(pMutable: EmployeeEntity): Promise<EmployeeEntity> {
    return pMutable;
  }

  async updateMany(_pMutableList: EmployeeEntity[]): Promise<EmployeeEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }

  async getEmployeeRole(
    pEmployeeId: number,
  ): Promise<EmployeeRoleEntity | null> {
    return new EmployeeRoleEntity(pEmployeeId, 2);
  }

  async createEmployeeRole(
    pMutable: EmployeeRoleEntity,
  ): Promise<EmployeeRoleEntity> {
    return pMutable;
  }

  async updateEmployeeRole(
    pMutable: EmployeeRoleEntity,
  ): Promise<EmployeeRoleEntity> {
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
