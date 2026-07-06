import type IDto from '../../../../shared/interfaces/dto.interface.js';
export interface UpdateRestaurantTableDto extends IDto<number> {
  capacity?: number;
  tableNo?: string;
  activeStatus?: number;
}
