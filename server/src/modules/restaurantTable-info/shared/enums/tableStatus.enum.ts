class TableStatus {
  static readonly ACTIVE = 0;
  static readonly INACTIVE = 1;
  static readonly RESERVED = 2;
  static readonly OCCUPIED = 3;

  static readonly names = [
    'ACTIVE',
    'INACTIVE',
    'RESERVED',
    'OCCUPIED',
  ] as const;

  static readonly values = [
    TableStatus.ACTIVE,
    TableStatus.INACTIVE,
    TableStatus.RESERVED,
    TableStatus.OCCUPIED,
  ] as const;

  private static readonly roleMap: Record<string, number> = {
    ACTIVE: TableStatus.ACTIVE,
    INACTIVE: TableStatus.INACTIVE,
    RESERVED: TableStatus.RESERVED,
    OCCUPIED: TableStatus.OCCUPIED,
  };

  static getValue(role: string): number | undefined {
    return this.roleMap[role];
  }

  static getLabel(value: number): string | undefined {
    return Object.keys(this.roleMap).find((key) => this.roleMap[key] === value);
  }
}

export default TableStatus;
