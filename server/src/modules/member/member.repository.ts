import type IRepository from '../../shared/interfaces/repository.interface.js';
import type MemberDto from './dtos/member.dto.js';
import type CreateMemberDto from './dtos/createMember.dto.js';
import type UpdateMemberDto from './dtos/updateMember.dto.js';
import type { MemberAddressDto } from './dtos/memberAddress.dto.js';

class MemberRepository implements IRepository<
  MemberDto,
  CreateMemberDto,
  UpdateMemberDto,
  number
> {
  async get(_id: number): Promise<MemberDto | null> {
    return null;
  }

  async getAll(): Promise<MemberDto[]> {
    return [];
  }

  async create(pMutable: CreateMemberDto): Promise<MemberDto> {
    return {
      id: 1,
      ...pMutable,
      discount: 0,
      discountTypeId: 0,
    };
  }

  async createMany(_pMutableList: CreateMemberDto[]): Promise<MemberDto[]> {
    return [];
  }

  async update(pMutable: UpdateMemberDto): Promise<MemberDto> {
    return {
      id: pMutable.id,
      customerId: pMutable.customerId,
      membershipNumber: 'Ong-Bhong-Chong',
      cardIssueDate: pMutable.cardIssueDate ?? new Date(),
      membershipExpiryDate: pMutable.membershipExpiryDate ?? new Date(),
      activeStatus: pMutable.activeStatus ?? true,
      discount: 0,
      discountTypeId: pMutable.discountTypeId ?? 0,
    };
  }

  async updateMany(_pMutableList: UpdateMemberDto[]): Promise<MemberDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }

  async getMemberAddress(pMemberId: number): Promise<MemberAddressDto> {
    return {
      id: 1,
      memberId: pMemberId,
      country: 'Bangladesh',
    };
  }

  async createMemberAddress(
    pMutable: MemberAddressDto,
  ): Promise<MemberAddressDto> {
    return pMutable;
  }

  async updateMemberAddress(
    pMutable: MemberAddressDto,
  ): Promise<MemberAddressDto> {
    return pMutable;
  }
}

export default MemberRepository;
