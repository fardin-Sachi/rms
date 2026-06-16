import type IDto from "../../../../shared/interfaces/dto.interface.js";
import type TableStatus from "../../shared/enums/tableStatus.enum.js";

export interface UpdateRestaurantTableDto extends IDto<number> {
  capacity?: number;
  tableNo?: string;
  activeStatus?: TableStatus;
}
