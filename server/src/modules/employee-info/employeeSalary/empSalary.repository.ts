import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Database } from '../../../infrastructures/database/index.database.js';
import type EmployeeSalaryEntity from './entities/employeeSalary.entity.js';

/*
 * TODO: Remove Dtos from Repository layer
 * TODO: Separate EmployeeAddress and EmployeeRole as individual sub-module
 */
class EmployeeSalaryRepository extends BaseRepository<
  EmployeeSalaryEntity,
  number
> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }

  async get(_id: number): Promise<EmployeeSalaryEntity | null> {
    return null;
  }

  async getAll(): Promise<EmployeeSalaryEntity[]> {
    return [];
  }

  async create(pMutable: EmployeeSalaryEntity): Promise<EmployeeSalaryEntity> {
    return pMutable;
  }

  async createMany(
    _pMutableList: EmployeeSalaryEntity[],
  ): Promise<EmployeeSalaryEntity[]> {
    return [];
  }

  async update(entity: EmployeeSalaryEntity): Promise<EmployeeSalaryEntity> {
    return entity;
  }

  async updateMany(
    _pMutableList: EmployeeSalaryEntity[],
  ): Promise<EmployeeSalaryEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
  }
}

export default EmployeeSalaryRepository;
