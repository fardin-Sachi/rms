import type IRepository from '../../shared/interfaces/repository.interface.js';
import type EmpSalaryDto from './dtos/empSalary.dto.js';
import type CreateEmpSalaryDto from './dtos/createEmpSalary.dto.js';
import type UpdateEmpSalaryDto from './dtos/updateEmpSalary.dto.js';
import Big from 'big.js';

class EmployeeSalaryRepository implements IRepository<
  EmpSalaryDto,
  CreateEmpSalaryDto,
  UpdateEmpSalaryDto,
  number
> {
  async get(_id: number): Promise<EmpSalaryDto | null> {
    return {
      id: 1,
      employeeId: 1,
      salaryAmount: Big(10_000),
      activeStatus: true,
    };
  }

  async getAll(): Promise<EmpSalaryDto[]> {
    return [];
  }

  async create(pMutable: CreateEmpSalaryDto): Promise<EmpSalaryDto> {
    return {
      id: 1,
      ...pMutable,
      activeStatus: pMutable.activeStatus ?? true,
    };
  }

  async createMany(
    _pMutableList: CreateEmpSalaryDto[],
  ): Promise<EmpSalaryDto[]> {
    return [];
  }

  async update(pMutable: UpdateEmpSalaryDto): Promise<EmpSalaryDto> {
    return {
      ...pMutable,
      salaryAmount: Big(pMutable.salaryAmount ?? 10_000),
      activeStatus: pMutable.activeStatus ?? true,
    };
  }

  async updateMany(
    _pMutableList: UpdateEmpSalaryDto[],
  ): Promise<EmpSalaryDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default EmployeeSalaryRepository;
