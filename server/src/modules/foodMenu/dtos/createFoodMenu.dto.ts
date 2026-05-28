import Big from 'big.js';

export default interface CreateFoodMenuDto {
  name: string;
  description?: string;
  imageUrl?: string;
  preparationTime?: number; // In minutes
  price?: Big; //Price may be provided later
  activeStatus: boolean;
}
