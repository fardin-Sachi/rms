export default class CustomerEntity {
  constructor(
    public readonly id: number,
    public name: string | null,
    public contact: string | null,
    public email: string | null,
    public createdBy: number | null,
    public createdOn: Date | null,
    public updatedBy: number | null,
    public updatedOn: Date | null,
  ) {}

  changeName(name: string | null): void {
    this.name = name;
  }

  changeContact(contact: string | null): void {
    this.contact = contact;
  }

  updateEmail(email: string | null): void {
    this.email = email;
  }

  updateAudit(updatedBy: number, updatedOn: Date): void {
    this.updatedBy = updatedBy;
    this.updatedOn = updatedOn;
  }
}
