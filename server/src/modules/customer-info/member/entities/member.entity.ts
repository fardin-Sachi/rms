import Big from 'big.js';

export default class MemberEntity {
  constructor(
    public readonly id: number,
    public customerId: number,
    public membershipNumber: string,
    public points: Big | null,
    public discount: number,
    public discountTypeId: number,
    public discountTypeName: string | null,
    public dob: Date | null,
    public cardIssueDate: Date,
    public membershipExpiryDate: Date,
    public activeStatus: boolean,
    public createdBy: number | null,
    public createdOn: Date | null,
    public updatedBy: number | null,
    public updatedOn: Date | null,
  ) {}

  changeCustomer(customerId: number): void {
    this.customerId = customerId;
  }

  updatePoints(points: Big | null): void {
    this.points = points;
  }

  updateDiscount(discount: number): void {
    this.discount = discount;
  }

  updateDiscountType(
    discountTypeId: number,
    discountTypeName: string | null,
  ): void {
    this.discountTypeId = discountTypeId;
    this.discountTypeName = discountTypeName;
  }

  updateDob(dob: Date | null): void {
    this.dob = dob;
  }

  updateCardIssueDate(date: Date): void {
    this.cardIssueDate = date;
  }

  updateMembershipExpiryDate(date: Date): void {
    this.membershipExpiryDate = date;
  }

  activate(): void {
    this.activeStatus = true;
  }

  deactivate(): void {
    this.activeStatus = false;
  }

  updateAudit(updatedBy: number | null, updatedOn: Date | null): void {
    this.updatedBy = updatedBy;
    this.updatedOn = updatedOn;
  }
}
