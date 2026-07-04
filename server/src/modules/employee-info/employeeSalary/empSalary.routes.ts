import express, { type Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { employeeIdParamSchema } from '../employee/validators/employeeIdParam.validator.js';
import { logger } from '../../../infrastructures/logger/logger.js';
import { employeeIdParamValidator } from '../employee/validators/employeeIdParam.validator.js';
import EmployeeSalaryController from './empSalary.controller.js';
import EmployeeSalaryRepository from './empSalary.repository.js';
import EmployeeSalaryService from './empSalary.service.js';
import { createEmpSalaryValidator } from './validators/createEmpSalary.validator.js';
import { updateEmpSalaryValidator } from './validators/updateEmpSalary.validator.js';

const router: Router = express.Router();

/*
 * IMPORTANT: employeeIdParamValidator should be used for 'params' only
 */

/// Object declarations
const mRepository = new EmployeeSalaryRepository(logger);

const mService = new EmployeeSalaryService(logger, mRepository);

const mController = new EmployeeSalaryController(logger, mService);

router
  .get(
    '/salary/:id',
    validate(employeeIdParamSchema, 'params'),
    mController.get,
    validate(employeeIdParamValidator, 'params'),
    employeeSalaryController.get,
  )
  .post(
    '/salary/:id',
    validate(employeeIdParamValidator, 'params'),
    validate(createEmpSalaryValidator, 'body'),
    employeeSalaryController.create,
  )
  .patch(
    '/salary/:id',
    validate(employeeIdParamValidator, 'params'),
    validate(updateEmpSalaryValidator, 'body'),
    employeeSalaryController.update,
  );

export default router;
