import type { ICache } from '../../../infrastructures/cache/index.cache.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type CreateEmpSalaryDto from './dtos/createEmpSalary.dto.js';
import type EmpSalaryDto from './dtos/empSalary.dto.js';
import type UpdateEmpSalaryDto from './dtos/updateEmpSalary.dto.js';
import EmployeeSalaryRepository from './empSalary.repository.js';
import type EmployeeSalaryEntity from './entities/employeeSalary.entity.js';
import type EmployeeSalaryMapper from './mappers/employeeSalary.mapper.js';

class EmployeeSalaryService extends BaseService<
  EmpSalaryDto,
  CreateEmpSalaryDto,
  UpdateEmpSalaryDto,
  EmployeeSalaryEntity,
  number,
  EmployeeSalaryRepository
> {
  constructor(
    mLogger: ILogger,
    mCache: ICache,
    mRepository: EmployeeSalaryRepository,
    mMapper: EmployeeSalaryMapper,
  ) {
    super(mLogger, mCache, mRepository, mMapper);
  }
}

export default EmployeeSalaryService;
