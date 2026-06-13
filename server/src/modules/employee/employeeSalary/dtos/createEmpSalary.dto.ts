import Big from 'big.js';

export default interface CreateEmpSalaryDto {
  employeeId: number;
  salaryAmount: Big;
  salaryStartDate?: Date;
  salaryEndDate?: Date;
  activeStatus: boolean;
  createdBy?: number;
  createdOn?: Date;
}
