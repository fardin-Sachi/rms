import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type CreateEmployeeDto from '../dtos/createEmployee.dto.js';
import type { EmployeeDto } from '../dtos/employee.dto.js';
import type UpdateEmployeeDto from '../dtos/updateEmployee.dto.js';
import EmployeeEntity from '../entities/employee.entity.js';

export default class EmployeeMapper implements IEntityMapper<
  EmployeeEntity,
  EmployeeDto,
  CreateEmployeeDto,
  UpdateEmployeeDto
> {
  toEntity(dto: EmployeeDto): EmployeeEntity {
    return new EmployeeEntity(
      dto.id,
      dto.name,
      dto.dob ?? null,
      dto.contact,
      dto.email ?? null,
      dto.sex,
      dto.joiningDate,
      dto.endDate ?? null,
      dto.nidNumber ?? null,
      dto.imageUrl ?? null,
      dto.lastLogin ?? null,
      dto.onVacation,
      dto.activeStatus,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      dto.updatedBy ?? null,
      dto.updatedOn ?? null,
    );
  }

  fromCreateDto(dto: CreateEmployeeDto): EmployeeEntity {
    return new EmployeeEntity(
      0,
      dto.name,
      dto.dob ?? null,
      dto.contact,
      dto.email ?? null,
      dto.sex,
      dto.joiningDate,
      dto.endDate ?? null,
      dto.nidNumber ?? null,
      dto.imageUrl ?? null,
      null,
      dto.onVacation ?? false,
      dto.activeStatus,
      dto.createdBy,
      dto.createdOn,
      null,
      null,
    );
  }

  toDto(entity: EmployeeEntity): EmployeeDto {
    const dto: EmployeeDto = {
      id: entity.id,
      name: entity.name,
      contact: entity.contact,
      sex: entity.sex,
      joiningDate: entity.joiningDate,
      onVacation: entity.onVacation,
      activeStatus: entity.activeStatus,
    };

    if (entity.dob) dto.dob = entity.dob;

    if (entity.email) dto.email = entity.email;

    if (entity.endDate) dto.endDate = entity.endDate;

    if (entity.nidNumber) dto.nidNumber = entity.nidNumber;

    if (entity.imageUrl) dto.imageUrl = entity.imageUrl;

    if (entity.lastLogin) dto.lastLogin = entity.lastLogin;

    if (entity.createdBy !== null) dto.createdBy = entity.createdBy;

    if (entity.createdOn) dto.createdOn = entity.createdOn;

    if (entity.updatedBy !== null) dto.updatedBy = entity.updatedBy;

    if (entity.updatedOn) dto.updatedOn = entity.updatedOn;

    return dto;
  }

  updateEntity(entity: EmployeeEntity, dto: UpdateEmployeeDto): EmployeeEntity {
    if (dto.name !== undefined) entity.changeName(dto.name);

    if (dto.contact !== undefined) entity.changeContact(dto.contact);

    if (dto.email !== undefined) entity.updateEmail(dto.email);

    if (dto.imageUrl !== undefined) entity.updateImage(dto.imageUrl);

    if (dto.lastLogin !== undefined) entity.updateLastLogin(dto.lastLogin);

    if (dto.onVacation !== undefined) {
      if (dto.onVacation) {
        entity.markOnVacation();
      } else {
        entity.markBackFromVacation();
      }
    }

    if (dto.activeStatus !== undefined) {
      if (dto.activeStatus) {
        entity.activate();
      } else {
        entity.deactivate();
      }
    }

    entity.updateAudit(dto.updatedBy, dto.updatedOn);

    return entity;
  }
}
