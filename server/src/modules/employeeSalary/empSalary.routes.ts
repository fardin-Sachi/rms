import express, { type Router } from 'express';
import { validate } from '../../shared/middlewares/validate.middleware.js';
import { employeeIdParamSchema } from '../../shared/validators/employeeIdParam.validator.js';
import { logger } from '../../shared/libs/logger.js';
import EmployeeSalaryController from './empSalary.controller.js';
import { createEmpSalarySchema } from './validators/createEmpSalary.validator.js';
import { updateEmpSalarySchema } from './validators/updateEmpSalary.validator.js';

const router: Router = express.Router();

/*
 * IMPORTANT: employeeIdParamSchema should be used for 'params' only
 */

/// Object declarations
const employeeSalaryController = new EmployeeSalaryController(logger);

router
  .get(
    '/salary/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    employeeSalaryController.get,
  )
  .post(
    '/salary/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    validate(createEmpSalarySchema, 'body'),
    employeeSalaryController.create,
  )
  .patch(
    '/salary/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    validate(updateEmpSalarySchema, 'body'),
    employeeSalaryController.update,
  );

export default router;
