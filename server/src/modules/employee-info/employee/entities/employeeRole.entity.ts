export default class EmployeeRoleEntity {
  constructor(
    public readonly employeeId: number,
    public employeeRoleId: number,
    public employeeName: string | null = null,
    public employeeRoleName: string | null = null,
  ) {}

  assignRole(roleId: number): void {
    this.employeeRoleId = roleId;
  }

  renameEmployee(name: string | null): void {
    this.employeeName = name;
  }

  renameRole(name: string | null): void {
    this.employeeRoleName = name;
  }
}
