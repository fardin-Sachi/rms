import type { ILogger } from '../../shared/interfaces/logger.interface.js';
import MemberRepository from "./member.repository.js";
import type MemberDto from "./dtos/member.dto.js";
import type CreateMemberDto from "./dtos/createMember.dto.js";
import type UpdateMemberDto from "./dtos/updateMember.dto.js";

class MemberService {
  private readonly memberRepository: MemberRepository;

  constructor(private readonly logger: ILogger) {
    this.memberRepository = new MemberRepository();
  }

  async get(id: number): Promise<MemberDto | null> {
    return this.memberRepository.get(id);
  }

  async getAll(): Promise<MemberDto[]> {
    return this.memberRepository.getAll();
  }

  async create(pMutable: CreateMemberDto): Promise<MemberDto> {
    return this.memberRepository.create(pMutable);
  }

  async createMany(pMutableList: CreateMemberDto[]): Promise<MemberDto[]> {
    return this.memberRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdateMemberDto): Promise<MemberDto> {
    return this.memberRepository.update(pMutable);
  }

  async updateMany(pMutableList: UpdateMemberDto[]): Promise<MemberDto[]> {
    return this.memberRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.memberRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.memberRepository.deleteMany(ids);
  }
}

export default MemberService;
