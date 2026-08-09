import { type Router } from 'express';
import { logger } from '../../../infrastructures/logger/logger.js';
import { db } from '../../../infrastructures/database/index.database.js';
import cache from '../../../infrastructures/cache/cache.factory.js';
import CustomerController from './customer.controller.js';
import CustomerRepository from './customer.repository.js';
import CustomerService from './customer.service.js';
import CustomerMapper from './mappers/customer.mapper.js';
import CustomerRouter from './customer.routes.js';

class CustomerModule {
  public readonly router: Router;
  constructor() {
    const mapper = new CustomerMapper();
    const repository = new CustomerRepository(db, logger);
    const service = new CustomerService(logger, cache, repository, mapper);
    const controller = new CustomerController(logger, service);
    const router = new CustomerRouter(controller);
    this.router = router.router;
  }
}
const customerModule = new CustomerModule();

export default customerModule.router;
