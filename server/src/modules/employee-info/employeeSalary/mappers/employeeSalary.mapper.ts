import type { IEntityMapper } from '../../../../shared/interfaces/mapper.interface.js';
import type CreateEmpSalaryDto from '../dtos/createEmpSalary.dto.js';
import type EmpSalaryDto from '../dtos/empSalary.dto.js';
import type UpdateEmpSalaryDto from '../dtos/updateEmpSalary.dto.js';
import EmployeeSalaryEntity from '../entities/employeeSalary.entity.js';

export default class EmployeeSalaryMapper implements IEntityMapper<
  EmployeeSalaryEntity,
  EmpSalaryDto,
  CreateEmpSalaryDto,
  UpdateEmpSalaryDto
> {
  toEntity(dto: EmpSalaryDto): EmployeeSalaryEntity {
    return new EmployeeSalaryEntity(
      dto.id,
      dto.employeeId,
      dto.salaryAmount,
      dto.salaryStartDate ?? null,
      dto.salaryEndDate ?? null,
      dto.activeStatus,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      dto.updatedBy ?? null,
      dto.updatedOn ?? null,
    );
  }

  fromCreateDto(dto: CreateEmpSalaryDto): EmployeeSalaryEntity {
    return new EmployeeSalaryEntity(
      0,
      dto.employeeId,
      dto.salaryAmount,
      dto.salaryStartDate ?? null,
      dto.salaryEndDate ?? null,
      dto.activeStatus,
      dto.createdBy ?? null,
      dto.createdOn ?? null,
      null,
      null,
    );
  }

  toDto(entity: EmployeeSalaryEntity): EmpSalaryDto {
    const dto: EmpSalaryDto = {
      id: entity.id,
      employeeId: entity.employeeId,
      salaryAmount: entity.salaryAmount,
      activeStatus: entity.activeStatus,
    };

    if (entity.salaryStartDate) {
      dto.salaryStartDate = entity.salaryStartDate;
    }

    if (entity.salaryEndDate) {
      dto.salaryEndDate = entity.salaryEndDate;
    }

    if (entity.createdBy !== null) {
      dto.createdBy = entity.createdBy;
    }

    if (entity.createdOn) {
      dto.createdOn = entity.createdOn;
    }

    if (entity.updatedBy !== null) {
      dto.updatedBy = entity.updatedBy;
    }

    if (entity.updatedOn) {
      dto.updatedOn = entity.updatedOn;
    }

    return dto;
  }

  updateEntity(
    entity: EmployeeSalaryEntity,
    dto: UpdateEmpSalaryDto,
  ): EmployeeSalaryEntity {
    entity.changeEmployeeId(dto.employeeId);

    if (dto.salaryAmount !== undefined) {
      entity.changeSalaryAmount(dto.salaryAmount);
    }

    if (dto.salaryStartDate !== undefined) {
      entity.updateSalaryStartDate(dto.salaryStartDate);
    }

    if (dto.salaryEndDate !== undefined) {
      entity.updateSalaryEndDate(dto.salaryEndDate);
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
