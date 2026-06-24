import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type EmpSalaryDto from './dtos/empSalary.dto.js';
import type UpdateEmpSalaryDto from './dtos/updateEmpSalary.dto.js';
import type CreateEmpSalaryDto from './dtos/createEmpSalary.dto.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type IRepository from '../../../shared/interfaces/repository.interface.js';

class EmployeeSalaryService extends BaseService<
  EmpSalaryDto,
  CreateEmpSalaryDto,
  UpdateEmpSalaryDto
> {
  constructor(
    mLogger: ILogger,
    mRepository: IRepository<
      EmpSalaryDto,
      CreateEmpSalaryDto,
      UpdateEmpSalaryDto
    >,
  ) {
    super(mLogger, mRepository);
  }
}

export default EmployeeSalaryService;
