import type TableStatus from '../../shared/enums/tableStatus.enum.js';

export interface CreateRestaurantTableDto {
  capacity: number;
  tableNo: string;
  activeStatus?: TableStatus;
}
