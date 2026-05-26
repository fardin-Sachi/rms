import type IDto from '../../../shared/interfaces/dto.interface.js';

export interface CustomerDto extends IDto<number> {
  name?: string;
  contact?: string;
  email?: string;
  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedOn?: Date;
}
