import express, { type Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { employeeIdParamSchema } from '../employee/validators/employeeIdParam.validator.js';
import { logger } from '../../../infrastructures/logger/logger.js';
import EmployeeSalaryController from './empSalary.controller.js';
import { createEmpSalarySchema } from './validators/createEmpSalary.validator.js';
import { updateEmpSalarySchema } from './validators/updateEmpSalary.validator.js';
import EmployeeSalaryRepository from './empSalary.repository.js';
import EmployeeSalaryService from './empSalary.service.js';

const router: Router = express.Router();

/*
 * IMPORTANT: employeeIdParamSchema should be used for 'params' only
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
  )
  .post(
    '/salary/:id',
    validate(employeeIdParamSchema, 'params'),
    validate(createEmpSalarySchema, 'body'),
    mController.create,
  )
  .patch(
    '/salary/:id',
    validate(employeeIdParamSchema, 'params'),
    validate(updateEmpSalarySchema, 'body'),
    mController.update,
  );

export default router;
