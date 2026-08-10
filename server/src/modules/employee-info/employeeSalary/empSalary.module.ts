import { type Router } from 'express';
import { logger } from '../../../infrastructures/logger/logger.js';
import { db } from '../../../infrastructures/database/index.database.js';
import cache from '../../../infrastructures/cache/cache.factory.js';
import EmployeeSalaryController from './empSalary.controller.js';
import EmployeeSalaryRepository from './empSalary.repository.js';
import EmployeeSalaryRouter from './empSalary.routes.js';
import EmployeeSalaryService from './empSalary.service.js';
import EmployeeSalaryMapper from './mappers/employeeSalary.mapper.js';

class EmployeeSalaryModule {
  public readonly router: Router;
  constructor() {
    const mapper = new EmployeeSalaryMapper();
    const repository = new EmployeeSalaryRepository(db, logger);
    const service = new EmployeeSalaryService(logger, cache, repository, mapper);
    const controller = new EmployeeSalaryController(logger, service);
    const router = new EmployeeSalaryRouter(controller);
    this.router = router.router;
  }
}
const employeeSalaryModule = new EmployeeSalaryModule();

export default employeeSalaryModule.router;
