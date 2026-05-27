import Big from "big.js";

export default interface CreateMemberDto {
  customerId: number;
  membershipNumber: string;
  points?: Big;
  discount: number;
  discountTypeId?: number;
  discountTypeName?: string;
  dob?: Date;
  cardIssueDate: Date;
  membershipExpiryDate: Date;
  activeStatus: boolean;
  createdBy?: number;
  createdOn?: Date;
}
