// export default class PromotionFoodEntity {
//   constructor(
//     public promotionId: number,
//     public foodMenuIds: number[],
//   ) {}

//   assignFoodMenus(foodMenuIds: number[]): void {
//     this.foodMenuIds = [...new Set([...this.foodMenuIds, ...foodMenuIds])];
//   }

//   removeFoodMenu(foodMenuId: number): void {
//     this.foodMenuIds = this.foodMenuIds.filter((id) => id !== foodMenuId);
//   }
// }

export default class PromotionFoodEntity {
  constructor(
    public readonly promotionId: number,
    public readonly foodMenuId: number,
  ) {}
}
