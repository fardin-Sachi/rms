import type IRepository from '../../../shared/interfaces/repository.interface.js';
import Big from 'big.js';
import type {OrderDetailDto} from "./dtos/orderDetail.dto.js";
import type {CreateOrderDetailDto} from "./dtos/createOrderDetail.dto.js";
import type {UpdateOrderDetailDto} from "./dtos/updateOrderDetail.dto.js";

class OrderDetailRepository implements IRepository<
  OrderDetailDto,
  CreateOrderDetailDto,
  UpdateOrderDetailDto,
  number
> {
  async get(_id: number): Promise<OrderDetailDto | null> {
    return null;
  }

  async getAll(): Promise<OrderDetailDto[]> {
    return [];
  }

  async create(pMutable: CreateOrderDetailDto): Promise<OrderDetailDto> {
    return {
      id: 1,
      ...pMutable,
      activeStatus: pMutable.activeStatus ?? true,
    };
  }

  async createMany(_pMutableList: CreateOrderDetailDto[]): Promise<OrderDetailDto[]> {
    return [];
  }

  async update(pMutable: UpdateOrderDetailDto): Promise<OrderDetailDto> {
    return {
      id: pMutable.id,
      customerOrderId: 2,
      foodMenuId: 3,
      orderTypeId: 3,
      unitPrice: Big(200),
      quantity: 4,
      lineTotal: Big(800),
      finalAmount: Big(800),
      activeStatus: true,
    };
  }

  async updateMany(_pMutableList: UpdateOrderDetailDto[]): Promise<OrderDetailDto[]> {
    return [];
  }

  async delete(id: number): Promise<number> {
    return id;
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return ids;
  }
}

export default OrderDetailRepository;
