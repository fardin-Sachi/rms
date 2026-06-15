import type IDto from '../../../../shared/interfaces/dto.interface.js';

export default interface UpdateEmployeeDto extends IDto<number> {
  name?: string;
  dob?: Date;
  contact?: string;
  email?: string;
  joiningDate?: Date;
  endDate?: Date;
  imageUrl?: string;
  lastLogin?: Date;
  onVacation?: boolean;
  activeStatus?: boolean;
  updatedBy: number;
  updatedOn: Date;
}
