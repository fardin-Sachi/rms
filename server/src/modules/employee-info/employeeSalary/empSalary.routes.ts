import { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { logger } from '../../../infrastructures/logger/logger.js';
import { employeeIdParamValidator } from '../employee/validators/employeeIdParam.validator.js';
import EmployeeSalaryController from './empSalary.controller.js';
import EmployeeSalaryRepository from './empSalary.repository.js';
import EmployeeSalaryService from './empSalary.service.js';
import { createEmpSalaryValidator } from './validators/createEmpSalary.validator.js';
import { updateEmpSalaryValidator } from './validators/updateEmpSalary.validator.js';
import EmployeeSalaryMapper from './mappers/employeeSalary.mapper.js';
import { db } from '../../../infrastructures/database/index.database.js';
import cache from '../../../infrastructures/cache/cache.factory.js';
/*
 * IMPORTANT: employeeIdParamValidator should be used for 'params' only
 */

/// Object declarations
const mMapper = new EmployeeSalaryMapper();
const mRepository = new EmployeeSalaryRepository(db, logger);
const mService = new EmployeeSalaryService(logger, cache, mRepository, mMapper);
const mController = new EmployeeSalaryController(logger, mService);

class EmployeeSalaryRouter {
  public readonly router: Router;

  constructor(private readonly mController: EmployeeSalaryController) {
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.registerSingleRoutes();
  }

  // Single Employee Salary routes
  private registerSingleRoutes(): void {
    this.router
      .get(
        '/salary/:id',
        validate(employeeIdParamValidator, 'params'),
        mController.get,
      )
      .post(
        '/salary/:id',
        validate(employeeIdParamValidator, 'params'),
        validate(createEmpSalaryValidator, 'body'),
        mController.create,
      )
      .patch(
        '/salary/:id',
        validate(employeeIdParamValidator, 'params'),
        validate(updateEmpSalaryValidator, 'body'),
        mController.update,
      );
  }
}

export default EmployeeSalaryRouter;