import type IDto from '../../../shared/interfaces/dto.interface.js';

import Big from 'big.js';

export default interface EmpSalaryDto extends IDto<number> {
  employeeId: number;
  employeeName?: string;
  salaryAmount: Big;
  salaryStartDate?: Date;
  salaryEndDate?: Date;
  activeStatus: boolean;
  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedOn?: Date;
}
