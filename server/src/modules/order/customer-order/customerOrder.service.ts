import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import CustomerOrderRepository from "./customerOrder.repository.js";
import type {CustomerOrderDto} from "./dtos/customerOrder.dto.js";
import type {CreateCustomerOrderDto} from "./dtos/createCustomerOrder.dto.js";
import type {UpdateCustomerOrderDto} from "./dtos/updateCustomerOrder.dto.js";

class CustomerOrderService {
  private readonly customerOrderRepository: CustomerOrderRepository;

  constructor(private readonly logger: ILogger) {
    this.customerOrderRepository = new CustomerOrderRepository();
  }

  async get(id: number): Promise<CustomerOrderDto | null> {
    return this.customerOrderRepository.get(id);
  }

  async getAll(): Promise<CustomerOrderDto[]> {
    return this.customerOrderRepository.getAll();
  }

  async create(pMutable: CreateCustomerOrderDto): Promise<CustomerOrderDto> {
    return this.customerOrderRepository.create(pMutable);
  }

  async createMany(pMutableList: CreateCustomerOrderDto[]): Promise<CustomerOrderDto[]> {
    return this.customerOrderRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdateCustomerOrderDto): Promise<CustomerOrderDto> {
    return this.customerOrderRepository.update(pMutable);
  }

  async updateMany(pMutableList: UpdateCustomerOrderDto[]): Promise<CustomerOrderDto[]> {
    return this.customerOrderRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.customerOrderRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.customerOrderRepository.deleteMany(ids);
  }
}

export default CustomerOrderService;
