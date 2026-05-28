import type IDto from '../../../shared/interfaces/dto.interface.js';
import Big from 'big.js';

export default interface UpdateFoodMenuDto extends IDto {
  name?: string;
  description?: string;
  imageUrl?: string;
  preparationTime?: number; // In minutes
  price?: Big; //Price may be provided later
  activeStatus?: boolean;
}
