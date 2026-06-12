import Big from 'big.js';
import type IDto from '../../../../shared/interfaces/dto.interface.js';

export default interface UpdateEmpSalaryDto extends IDto {
  employeeId: number;
  salaryAmount?: Big;
  salaryStartDate?: Date;
  salaryEndDate?: Date;
  activeStatus?: boolean;
  updatedBy: number;
  updatedOn: Date;
}
