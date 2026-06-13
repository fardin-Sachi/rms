import type IDto from '../../../../shared/interfaces/dto.interface.js';

/*
 * Can be used to fetch, create and update DB records
 */
export interface MemberAddressDto extends IDto {
  memberId: number;
  memberName?: string;
  addressTypeId?: number;
  addressTypeName?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  createdBy?: number;
  createdOn?: Date;
  updatedBy?: number;
  updatedOn?: Date;
}
