export default class EmployeeEntity {
  constructor(
    public readonly id: number,
    public name: string,
    public dob: Date | null,
    public contact: string,
    public email: string | null,
    public sex: boolean,
    public joiningDate: Date,
    public endDate: Date | null,
    public nidNumber: string | null,
    public imageUrl: string | null,
    public lastLogin: Date | null,
    public onVacation: boolean,
    public activeStatus: boolean,
    public createdBy: number | null,
    public createdOn: Date | null,
    public updatedBy: number | null,
    public updatedOn: Date | null,
  ) {}

  changeName(name: string): void {
    this.name = name;
  }

  changeContact(contact: string): void {
    this.contact = contact;
  }

  updateEmail(email: string | null): void {
    this.email = email;
  }

  updateImage(imageUrl: string | null): void {
    this.imageUrl = imageUrl;
  }

  updateLastLogin(date: Date): void {
    this.lastLogin = date;
  }

  markOnVacation(): void {
    this.onVacation = true;
  }

  markBackFromVacation(): void {
    this.onVacation = false;
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
