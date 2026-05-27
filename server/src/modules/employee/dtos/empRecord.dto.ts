import Big from 'big.js';

export interface EmployeeRecordDto {
  //Employee Data
  employeeId: number;
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
