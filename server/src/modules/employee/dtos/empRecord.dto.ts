import Big from 'big.js';
import type IDto from '../../../../shared/interfaces/dto.interface.js';

export interface EmployeeRecordDto extends IDto {
  //Employee Personal Data
  employeeName?: string;
  dob?: Date;
  contact?: string;
  email?: string;
  sex?: boolean;
  joiningDate?: Date;
  endDate?: Date;
  nidNumber?: string;
  imageUrl?: string;
  lastLogin?: Date;
  onVacation?: boolean;
  employeeActiveStatus?: boolean;

  //Employee Address Data
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;

  //Employee Role Data
  employeeRoleId?: number;
  employeeRoleName?: string;

  //Employee Salary Data
  salaryAmount?: Big;
  salaryStartDate?: Date;
  salaryEndDate?: Date;
}
