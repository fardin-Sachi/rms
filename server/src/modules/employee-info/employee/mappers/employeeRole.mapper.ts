import EmployeeRoleEntity from '../entities/employeeRole.entity.js';
import type { EmployeeRoleDto } from '../dtos/empRole.dto.js';

export default class EmployeeRoleMapper {
  static toEntity(dto: EmployeeRoleDto): EmployeeRoleEntity {
    return new EmployeeRoleEntity(
      dto.employeeId,
      dto.employeeRoleId,
      dto.employeeName ?? null,
      dto.employeeRoleName ?? null,
    );
  }

  static toDto(entity: EmployeeRoleEntity): EmployeeRoleDto {
    return {
      employeeId: entity.employeeId,
      employeeRoleId: entity.employeeRoleId,
      ...(entity.employeeName && {
        employeeName: entity.employeeName,
      }),
      ...(entity.employeeRoleName && {
        employeeRoleName: entity.employeeRoleName,
      }),
    };
  }
}
