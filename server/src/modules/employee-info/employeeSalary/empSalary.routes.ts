import express, { type Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { employeeIdParamValidator } from '../employee/validators/employeeIdParam.validator.js';
import { logger } from '../../../shared/libs/logger.js';
import EmployeeSalaryController from './empSalary.controller.js';
import { createEmpSalaryValidator } from './validators/createEmpSalary.validator.js';
import { updateEmpSalaryValidator } from './validators/updateEmpSalary.validator.js';

const router: Router = express.Router();

/*
 * IMPORTANT: employeeIdParamValidator should be used for 'params' only
 */

/// Object declarations
const employeeSalaryController = new EmployeeSalaryController(logger);

router
  .get(
    '/salary/:id',
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
