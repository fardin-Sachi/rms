import type { ILogger } from '../../../shared/interfaces/logger.interface.js';
import PaymentStatusLogRepository from './paymentStatusLog.repository.js';
import type { PaymentStatusLogDto } from './dtos/paymentStatusLog.dto.js';
import type { CreatePaymentStatusLogDto } from './dtos/createPaymentStatusLog.dto.js';
import type { UpdatePaymentStatusLogDto } from './dtos/updatePaymentStatusLog.dto.js';

class EmployeeService {
  private readonly paymentStatusLogRepository: PaymentStatusLogRepository;

  constructor(private readonly logger: ILogger) {
    this.paymentStatusLogRepository = new PaymentStatusLogRepository();
  }

  async get(id: number): Promise<PaymentStatusLogDto | null> {
    return this.paymentStatusLogRepository.get(id);
  }

  async getAll(): Promise<PaymentStatusLogDto[]> {
    return this.paymentStatusLogRepository.getAll();
  }

  async create(
    pMutable: CreatePaymentStatusLogDto,
  ): Promise<PaymentStatusLogDto> {
    return this.paymentStatusLogRepository.create(pMutable);
  }

  async createMany(
    pMutableList: CreatePaymentStatusLogDto[],
  ): Promise<PaymentStatusLogDto[]> {
    return this.paymentStatusLogRepository.createMany(pMutableList);
  }

  async update(
    pMutable: UpdatePaymentStatusLogDto,
  ): Promise<PaymentStatusLogDto> {
    return this.paymentStatusLogRepository.update(pMutable);
  }

  async updateMany(
    pMutableList: UpdatePaymentStatusLogDto[],
  ): Promise<PaymentStatusLogDto[]> {
    return this.paymentStatusLogRepository.updateMany(pMutableList);
  }

  async delete(id: number): Promise<number> {
    return this.paymentStatusLogRepository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<number[]> {
    return this.paymentStatusLogRepository.deleteMany(ids);
  }
}

export default EmployeeService;
