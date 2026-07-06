import Big from 'big.js';

export default class EmployeeSalaryEntity {
  constructor(
    public readonly id: number,
    public employeeId: number,
    public salaryAmount: Big,
    public salaryStartDate: Date | null,
    public salaryEndDate: Date | null,
    public activeStatus: boolean,
    public createdBy: number | null,
    public createdOn: Date | null,
    public updatedBy: number | null,
    public updatedOn: Date | null,
  ) {}

  changeEmployeeId(employeeId: number): void {
    this.employeeId = employeeId;
  }

  changeSalaryAmount(amount: Big): void {
    this.salaryAmount = amount;
  }

  updateSalaryStartDate(date: Date | null): void {
    this.salaryStartDate = date;
  }

  updateSalaryEndDate(date: Date | null): void {
    this.salaryEndDate = date;
  }

  activate(): void {
    this.activeStatus = true;
  }

  deactivate(): void {
    this.activeStatus = false;
  }

  updateAudit(updatedBy: number, updatedOn: Date): void {
    this.updatedBy = updatedBy;
    this.updatedOn = updatedOn;
  }
}
