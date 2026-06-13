import type IDto from '../../../../shared/interfaces/dto.interface.js';
import Big from 'big.js';

export default interface UpdateMemberDto extends IDto {
  customerId: number;
  points?: Big;
  discount?: number;
  discountTypeId?: number;
  discountTypeName?: string;
  dob?: Date;
  cardIssueDate?: Date;
  membershipExpiryDate?: Date;
  activeStatus?: boolean;
  updatedBy?: number;
  updatedOn?: Date;
}
