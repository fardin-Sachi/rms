import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import EmployeeSalaryRepository from './empSalary.repository.js';
import type EmpSalaryDto from './dtos/empSalary.dto.js';
import type UpdateEmpSalaryDto from './dtos/updateEmpSalary.dto.js';
import type CreateEmpSalaryDto from './dtos/createEmpSalary.dto.js';
import BaseService from '../../../shared/interfaces/baseService.js';

class EmployeeSalaryService extends BaseService <
  EmpSalaryDto,
  CreateEmpSalaryDto,
  UpdateEmpSalaryDto,
  number,
  EmployeeSalaryRepository
> {
  constructor(
    mLogger: ILogger,
    mRepository: EmployeeSalaryRepository,
  ) {
    super(mLogger, mRepository);
  }


}

export default EmployeeSalaryService;
