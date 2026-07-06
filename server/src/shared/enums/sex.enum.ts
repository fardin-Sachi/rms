class Sex {
  static readonly MALE = 0;
  static readonly FEMALE = 1;
  static readonly OTHER = 2;

  static readonly names = ['MALE', 'FEMALE', 'OTHER'] as const;

  static readonly values = [Sex.MALE, Sex.FEMALE, Sex.OTHER] as const;

  private static readonly roleMap: Record<string, number> = {
    MALE: Sex.MALE,
    FEMALE: Sex.FEMALE,
    OTHER: Sex.OTHER,
  };

  static getValue(role: string): number | undefined {
    return this.roleMap[role];
  }

  static getLabel(value: number): string | undefined {
    return Object.keys(this.roleMap).find((key) => this.roleMap[key] === value);
  }
}

export default Sex;
