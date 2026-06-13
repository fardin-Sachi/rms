import type IDto from '../../../../shared/interfaces/dto.interface.js';

export default interface UpdateCustomerDto extends IDto {
  name?: string;
  contact?: string;
  email?: string;
  updatedBy: number;
  updatedOn: Date;
}
