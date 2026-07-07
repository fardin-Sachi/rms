import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import MemberRepository from './member.repository.js';
import type MemberDto from './dtos/member.dto.js';
import type CreateMemberDto from './dtos/createMember.dto.js';
import type UpdateMemberDto from './dtos/updateMember.dto.js';
import type MemberEntity from './entities/member.entity.js';
import BaseService from '../../../shared/abstractions/base.service.js';
import type MemberMapper from './mappers/member.mapper.js';
import type { MemberAddressDto } from './dtos/memberAddress.dto.js';
import type { ICache } from '../../../infrastructures/cache/cache.interface.js';

class MemberService extends BaseService<
  MemberDto,
  CreateMemberDto,
  UpdateMemberDto,
  MemberEntity,
  number,
  MemberRepository
> {
  constructor(
    mLogger: ILogger,
    mCache: ICache,
    mRepository: MemberRepository,
    mMapper: MemberMapper,
  ) {
    super(mLogger, mCache, mRepository, mMapper);
  }

  async getMemberAddress(pMemberId: number): Promise<MemberAddressDto> {
    return this.mRepository.getMemberAddress(pMemberId);
  }

  async createMemberAddress(
    pMutable: MemberAddressDto,
  ): Promise<MemberAddressDto> {
    return this.mRepository.createMemberAddress(pMutable);
  }

  async updateMemberAddress(
    pMutable: MemberAddressDto,
  ): Promise<MemberAddressDto> {
    return this.mRepository.updateMemberAddress(pMutable);
  }
}

export default MemberService;
