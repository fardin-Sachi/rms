class EmployeeRole {
  static readonly OWNER = 0;
  static readonly MANAGER = 1;
  static readonly CASHIER = 2;
  static readonly HR = 3;
  static readonly COOK = 4;
  static readonly WAITER = 5;
  static readonly CLEANER = 6;

  static readonly names = [
    'OWNER',
    'MANAGER',
    'CASHIER',
    'HR',
    'COOK',
    'WAITER',
    'CLEANER',
  ] as const;

  private static readonly roleMap: Record<string, number> = {
    OWNER: EmployeeRole.OWNER,
    MANAGER: EmployeeRole.MANAGER,
    CASHIER: EmployeeRole.CASHIER,
    HR: EmployeeRole.HR,
    COOK: EmployeeRole.COOK,
    WAITER: EmployeeRole.WAITER,
    CLEANER: EmployeeRole.CLEANER,
  };

  static getValue(role: string): number | undefined {
    return this.roleMap[role];
  }

  static getLabel(value: number): string | undefined {
    return Object.keys(this.roleMap).find((key) => this.roleMap[key] === value);
  }
}

export default EmployeeRole;
