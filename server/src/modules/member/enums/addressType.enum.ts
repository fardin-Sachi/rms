class AddressType {
  static readonly HOME = 0;
  static readonly WORK = 1;
  static readonly BILLING = 2;

  static readonly names = [
    'HOME',
    'WORK',
    'BILLING',
  ] as const;

  static readonly values = [
    AddressType.HOME,
    AddressType.WORK,
    AddressType.BILLING,
  ] as const;

  private static readonly roleMap: Record<string, number> = {
    HOME: AddressType.HOME,
    WORK: AddressType.WORK,
    BILLING: AddressType.BILLING,
  };

  static getValue(role: string): number | undefined {
    return this.roleMap[role];
  }

  static getLabel(value: number): string | undefined {
    return Object
      .keys(this.roleMap)
      .find((key) => this.roleMap[key] === value);
  }
}

export default AddressType;
