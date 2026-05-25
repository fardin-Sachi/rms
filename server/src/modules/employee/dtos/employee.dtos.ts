import type IDto from '../../../shared/interfaces/dto.interface.js';

export interface EmployeeDto extends IDto {
  name: string;
  dob?: Date;
  contact: string;
  email?: string;
  sex: boolean;
  joiningDate: Date;
  endDate?: Date;
  nidNumber?: string;
  imageUrl?: string;
  lastLogin?: Date;
  onVacation: boolean;
  activeStatus: boolean;
  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedOn?: Date;
}
