import { type Router } from 'express';
import { logger } from '../../../infrastructures/logger/logger.js';
import { db } from '../../../infrastructures/database/index.database.js';
import cache from '../../../infrastructures/cache/cache.factory.js';
import EmployeeController from './employee.controller.js';
import EmployeeRepository from './employee.repository.js';
import EmployeeService from './employee.service.js';
import EmployeeMapper from './mappers/employee.mapper.js';
import EmployeeRouter from './employee.routes.js';

class EmployeeModule {
  public readonly router: Router;
  constructor() {
    const mapper = new EmployeeMapper();
    const repository = new EmployeeRepository(db, logger);
    const service = new EmployeeService(logger, cache, repository, mapper);
    const controller = new EmployeeController(logger, service);
    const router = new EmployeeRouter(controller);
    this.router = router.router;
  }
}
const customerModule = new EmployeeModule();

export default customerModule.router;
