import type { ILogger } from '../../shared/interfaces/logger.interface.js';
import EmployeeSalaryRepository from './empSalary.repository.js';
import type EmpSalaryDto from './dtos/empSalary.dto.js';
import type UpdateEmpSalaryDto from './dtos/updateEmpSalary.dto.js';
import type CreateEmpSalaryDto from './dtos/createEmpSalary.dto.js';

class EmployeeSalaryService {

  private readonly employeeSalaryRepository: EmployeeSalaryRepository;

  constructor(private readonly logger: ILogger) {
    this.employeeSalaryRepository = new EmployeeSalaryRepository();
  }

  async get(id: number): Promise<EmpSalaryDto | null> {
    return this.employeeSalaryRepository.get(id);
  }

  async getAll(): Promise<EmpSalaryDto[]> {
    return this.employeeSalaryRepository.getAll();
  }

  async create(pMutable: CreateEmpSalaryDto): Promise<EmpSalaryDto> {
    return this.employeeSalaryRepository.create(pMutable);
  }

  async createMany(
    pMutableList: CreateEmpSalaryDto[],
  ): Promise<EmpSalaryDto[]> {
    return this.employeeSalaryRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdateEmpSalaryDto): Promise<EmpSalaryDto> {
    return this.employeeSalaryRepository.update(pMutable);
  }

  async updateMany(
    pMutableList: UpdateEmpSalaryDto[],
  ): Promise<EmpSalaryDto[]> {
    return this.employeeSalaryRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.employeeSalaryRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.employeeSalaryRepository.deleteMany(ids);
  }

}

export default EmployeeSalaryService;
