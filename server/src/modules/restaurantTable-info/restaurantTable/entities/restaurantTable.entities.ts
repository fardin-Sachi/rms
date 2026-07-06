export default class RestaurantTableEntity {
  constructor(
    public readonly id: number,
    public capacity: number,
    public tableNo: string,
    public activeStatus: number,
  ) {}

  changeCapacity(capacity: number): void {
    this.capacity = capacity;
  }

  changeTableNo(tableNo: string): void {
    this.tableNo = tableNo;
  }

  activate(): void {
    this.activeStatus = 1;
  }

  deactivate(): void {
    this.activeStatus = 0;
  }
}
