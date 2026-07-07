export class CacheKeys {
  static employee(id: number) {
    return `employee:${id}`;
  }

  static employeeList() {
    return 'employee:list';
  }

  static employeeDepartment(id: number) {
    return `employee:${id}:department`;
  }

  static salary(id: number) {
    return `salary:${id}`;
  }
}
