import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import type {PaymentDto} from "./dtos/payment.dto.js";
import PaymentRepository from "./payment.repository.js";
import type {CreatePaymentDto} from "./dtos/createPayment.dto.js";
import type {UpdatePaymentDto} from "./dtos/updatePayment.dto.js";

class EmployeeService {
  private readonly paymentRepository: PaymentRepository;

  constructor(private readonly logger: ILogger) {
    this.paymentRepository = new PaymentRepository();
  }

  async get(id: number): Promise<PaymentDto | null> {
    return this.paymentRepository.get(id);
  }

  async getAll(): Promise<PaymentDto[]> {
    return this.paymentRepository.getAll();
  }

  async create(pMutable: CreatePaymentDto): Promise<PaymentDto> {
    return this.paymentRepository.create(pMutable);
  }

  async createMany(pMutableList: CreatePaymentDto[]): Promise<PaymentDto[]> {
    return this.paymentRepository.createMany(pMutableList);
  }

  async update(pMutable: UpdatePaymentDto): Promise<PaymentDto> {
    return this.paymentRepository.update(pMutable);
  }

  async updateMany(pMutableList: UpdatePaymentDto[]): Promise<PaymentDto[]> {
    return this.paymentRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.paymentRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.paymentRepository.deleteMany(ids);
  }
}

export default EmployeeService;
