import Big from 'big.js';
import type IDto from '../../../shared/interfaces/dto.interface.js';

export default interface MemberDto extends IDto<number> {
  customerId: number;
  membershipNumber: string;
  points?: Big;
  discount: number;
  discountTypeId: number;
  discountTypeName?: string;
  dob?: Date;
  cardIssueDate: Date;
  membershipExpiryDate: Date;
  activeStatus: boolean;
  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedOn?: Date;
}
