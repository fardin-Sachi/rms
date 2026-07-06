import type Big from 'big.js';

export default class FoodMenuEntity {
  constructor(
    public readonly id: number,
    public name: string,
    public description: string | null,
    public imageUrl: string | null,
    public preparationTime: number | null,
    public price: Big | null,
    public activeStatus: boolean,
  ) {}

  changeName(name: string): void {
    this.name = name;
  }

  updateDescription(description: string | null): void {
    this.description = description;
  }

  updateImage(imageUrl: string | null): void {
    this.imageUrl = imageUrl;
  }

  updatePreparationTime(preparationTime: number | null): void {
    this.preparationTime = preparationTime;
  }

  updatePrice(price: Big | null): void {
    this.price = price;
  }

  activate(): void {
    this.activeStatus = true;
  }

  deactivate(): void {
    this.activeStatus = false;
  }
}
