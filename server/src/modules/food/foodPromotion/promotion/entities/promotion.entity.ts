export default class PromotionEntity {
  constructor(
    public readonly id: number,
    public name: string,
    public description: string | null,
    public promotionTypeId: number,
    public startTime: Date | null,
    public endTime: Date | null,
    public isPermanent: boolean,
    public activeStatus: boolean,
    public createdBy: number | null,
    public createdOn: Date | null,
    public updatedBy: number | null,
    public updatedOn: Date | null,
  ) {}

  changeName(name: string): void {
    this.name = name;
  }

  changeDescription(description: string | null): void {
    this.description = description;
  }

  changePromotionType(promotionTypeId: number): void {
    this.promotionTypeId = promotionTypeId;
  }

  updateStartTime(startTime: Date | null): void {
    this.startTime = startTime;
  }

  updateEndTime(endTime: Date | null): void {
    this.endTime = endTime;
  }

  makePermanent(): void {
    this.isPermanent = true;
  }

  makeTemporary(): void {
    this.isPermanent = false;
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
