import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type { Request, Response } from 'express';
import { ApiResponse } from '../../../shared/utils/apiResponse.js';
import type UpdateMemberDto from './dtos/updateMember.dto.js';
import type MemberDto from './dtos/member.dto.js';
import type CreateMemberDto from './dtos/createMember.dto.js';
import type MemberService from './member.service.js';
import type { MemberAddressDto } from './dtos/memberAddress.dto.js';

class MemberController {
  constructor(
    private readonly mLogger: ILogger,
    private readonly mService: MemberService,
  ) {
    this.get = this.get.bind(this);
    this.getAll = this.getAll.bind(this);
    this.create = this.create.bind(this);
    this.createMany = this.createMany.bind(this);
    this.update = this.update.bind(this);
    this.updateMany = this.updateMany.bind(this);
    this.delete = this.delete.bind(this);
    this.deleteMany = this.deleteMany.bind(this);
  }

  async get(req: Request, res: Response): Promise<Response> {
    const customerId: number = Number(req.params.customerId);

    const memberDto: MemberDto | null = await this.mService.get(customerId);

    if (!memberDto) {
      return ApiResponse.error(
        res,
        404,
        `No member found with this ID: ${customerId}`,
      );
    }

    return ApiResponse.success<MemberDto>(
      res,
      200,
      `Member found with this ID: ${memberDto.customerId}`,
      memberDto,
    );
  }

  async getAll(_req: Request, res: Response): Promise<Response> {
    const memberDtos: MemberDto[] = await this.mService.getAll();

    return ApiResponse.success<MemberDto[]>(
      res,
      200,
      `Members found`,
      memberDtos,
    );
  }

  async create(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateMemberDto;

    const createdMemberDto: MemberDto = await this.mService.create(payload);

    return ApiResponse.success<MemberDto>(
      res,
      201,
      `Member created with ID: ${createdMemberDto.id}`,
      createdMemberDto,
    );
  }

  async createMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as CreateMemberDto[];

    const createdMemberDtos: MemberDto[] =
      await this.mService.createMany(payload);

    return ApiResponse.success<MemberDto[]>(
      res,
      201,
      `Members are created`,
      createdMemberDtos,
    );
  }

  async update(req: Request, res: Response): Promise<Response> {
    const customerId: number = Number(req.params.customerId);
    const payload: UpdateMemberDto = req.body;
    payload.customerId = customerId;

    const updatedMemberDto: MemberDto = await this.mService.update(payload);

    return ApiResponse.success<MemberDto>(
      res,
      200,
      `Member updated with ID: ${updatedMemberDto.id}`,
      updatedMemberDto,
    );
  }

  async updateMany(req: Request, res: Response): Promise<Response> {
    const payload = req.body as UpdateMemberDto[];

    const updatedMemberDtos: MemberDto[] =
      await this.mService.updateMany(payload);

    return ApiResponse.success<MemberDto[]>(
      res,
      200,
      `Members are updated`,
      updatedMemberDtos,
    );
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const customerId: number = Number(req.params.customerId);

    await this.mService.delete(customerId);

    return ApiResponse.success<void>(
      res,
      200,
      `Member is deleted with ID: ${customerId}`,
    );
  }

  async deleteMany(req: Request, res: Response): Promise<Response> {
    const ids = req.body as number[];

    await this.mService.deleteMany(ids);

    return ApiResponse.success<void>(
      res,
      200,
      `Members are deleted with IDs: ${ids}`,
    );
  }

  async getMemberAddress(req: Request, res: Response): Promise<Response> {
    const pMemberId = Number(req.params.customerId);

    const memberAddressDto: MemberAddressDto =
      await this.mService.getMemberAddress(pMemberId);

    return ApiResponse.success<MemberAddressDto>(
      res,
      200,
      `Member address found for Member ID: ${memberAddressDto.memberId}`,
      memberAddressDto,
    );
  }

  async createMemberAddress(req: Request, res: Response): Promise<Response> {
    const customerId: number = Number(req.params.customerId);
    const payload = req.body as MemberAddressDto;
    payload.memberId = customerId;

    const memberAddressDto: MemberAddressDto =
      await this.mService.createMemberAddress(payload);

    return ApiResponse.success<MemberAddressDto>(
      res,
      201,
      `Member address created for Member ID: ${memberAddressDto.memberId}`,
      memberAddressDto,
    );
  }

  async updateMemberAddress(req: Request, res: Response): Promise<Response> {
    const customerId: number = Number(req.params.customerId);
    const payload: MemberAddressDto = req.body;
    payload.memberId = customerId;

    const memberAddressDto: MemberAddressDto =
      await this.mService.updateMemberAddress(payload);

    return ApiResponse.success<MemberAddressDto>(
      res,
      200,
      `Member address updated with ID: ${memberAddressDto.memberId}`,
      memberAddressDto,
    );
  }
}

export default MemberController;
