import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type CreateMemberDto from '../dtos/createMember.dto.js';
import type MemberDto from '../dtos/member.dto.js';
import type UpdateMemberDto from '../dtos/updateMember.dto.js';
import MemberEntity from '../entities/member.entity.js';

export default class MemberMapper implements IEntityMapper<
  MemberEntity,
  MemberDto,
  CreateMemberDto,
  UpdateMemberDto
> {
  toEntity(dto: MemberDto): MemberEntity {
    return new MemberEntity(
      dto.id,
      dto.customerId,
      dto.membershipNumber,
      dto.points ?? null,
      dto.discount,
      dto.discountTypeId,
      dto.discountTypeName ?? null,
      dto.dob ?? null,
      dto.cardIssueDate,
      dto.membershipExpiryDate,
      dto.activeStatus,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      dto.updatedBy ?? null,
      dto.updatedOn ?? null,
    );
  }

  fromCreateDto(dto: CreateMemberDto): MemberEntity {
    return new MemberEntity(
      0,
      dto.customerId,
      dto.membershipNumber,
      dto.points ?? null,
      dto.discount,
      dto.discountTypeId ?? 0,
      dto.discountTypeName ?? null,
      dto.dob ?? null,
      dto.cardIssueDate,
      dto.membershipExpiryDate,
      dto.activeStatus,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      null,
      null,
    );
  }

  toDto(entity: MemberEntity): MemberDto {
    const dto: MemberDto = {
      id: entity.id,
      customerId: entity.customerId,
      membershipNumber: entity.membershipNumber,
      discount: entity.discount,
      discountTypeId: entity.discountTypeId,
      cardIssueDate: entity.cardIssueDate,
      membershipExpiryDate: entity.membershipExpiryDate,
      activeStatus: entity.activeStatus,
    };

    if (entity.points !== null) dto.points = entity.points;

    if (entity.discountTypeName !== null) {
      dto.discountTypeName = entity.discountTypeName;
    }

    if (entity.dob !== null) dto.dob = entity.dob;

    if (entity.createdBy !== null) dto.createdBy = entity.createdBy;

    if (entity.createdOn !== null) dto.createdOn = entity.createdOn;

    if (entity.updatedBy !== null) dto.updatedBy = entity.updatedBy;

    if (entity.updatedOn !== null) dto.updatedOn = entity.updatedOn;

    return dto;
  }

  updateEntity(entity: MemberEntity, dto: UpdateMemberDto): MemberEntity {
    entity.changeCustomer(dto.customerId);

    if (dto.points !== undefined) {
      entity.updatePoints(dto.points);
    }

    if (dto.discount !== undefined) {
      entity.updateDiscount(dto.discount);
    }

    if (dto.discountTypeId !== undefined) {
      entity.updateDiscountType(
        dto.discountTypeId,
        dto.discountTypeName ?? null,
      );
    }

    if (dto.dob !== undefined) {
      entity.updateDob(dto.dob);
    }

    if (dto.cardIssueDate !== undefined) {
      entity.updateCardIssueDate(dto.cardIssueDate);
    }

    if (dto.membershipExpiryDate !== undefined) {
      entity.updateMembershipExpiryDate(dto.membershipExpiryDate);
    }

    if (dto.activeStatus !== undefined) {
      if (dto.activeStatus) {
        entity.activate();
      } else {
        entity.deactivate();
      }
    }

    entity.updateAudit(dto.updatedBy ?? null, dto.updatedOn ?? null);

    return entity;
  }
}
