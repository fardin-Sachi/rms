import type { Database } from '../../../infrastructures/database/index.database.js';
import BaseRepository from '../../../shared/abstractions/base.repository.js';
import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { MemberAddressDto } from './dtos/memberAddress.dto.js';
import type MemberEntity from './entities/member.entity.js';

class MemberRepository extends BaseRepository<MemberEntity, number> {
  constructor(db: Database, logger: ILogger) {
    super(db, logger);
  }
  async get(_id: number): Promise<MemberEntity | null> {
    return null;
  }

  async getAll(): Promise<MemberEntity[]> {
    return [];
  }

  async create(pMutable: MemberEntity): Promise<MemberEntity> {
    return pMutable;
  }

  async createMany(_pMutableList: MemberEntity[]): Promise<MemberEntity[]> {
    return [];
  }

  async update(pMutable: MemberEntity): Promise<MemberEntity> {
    return pMutable;
  }

  async updateMany(_pMutableList: MemberEntity[]): Promise<MemberEntity[]> {
    return [];
  }

  async delete(_id: number): Promise<void> {
    return;
  }

  async deleteMany(_ids: number[]): Promise<void> {
    return;
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
