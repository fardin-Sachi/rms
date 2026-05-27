import { logger } from '../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import EmployeeController from './employee.controller.js';
import { validate } from '../../shared/middlewares/validate.middleware.js';
import { createEmployeeSchema } from './validators/createEmployee.validator.js';
import { employeeIdParamSchema } from '../../shared/validators/employeeIdParam.validator.js';
import { updateEmployeeSchema } from './validators/updateEmployee.validator.js';
import { createEmployeeArraySchema } from './validators/createEmployeeArray.validator.js';
import { updateEmployeeArraySchema } from './validators/updateEmployeeArray.validator.js';
import { deleteEmployeeArraySchema } from './validators/deleteEmployeeArray.validator.js';
import { empAddressSchema } from './validators/empAddress.validator.js';
import { empRoleSchema } from './validators/empRole.validator.js';

const router: Router = express.Router();

/*
 * IMPORTANT: employeeIdParamSchema should be used for 'params' only
 */

/// Object declarations
const employeeController = new EmployeeController(logger);

/// Employee Address Routes
router
  .get(
    '/address/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    employeeController.getEmployeeAddress,
  )
  .post(
    '/address/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    validate(empAddressSchema, 'body'),
    employeeController.createEmployeeAddress,
  )
  .patch(
    '/address/:employeeId',
    validate(empAddressSchema, 'body'),
    employeeController.updateEmployeeAddress,
  );

/// Employee Role Routes
router
  .get(
    '/role/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    employeeController.getEmployeeRole,
  )
  .post(
    '/role/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    validate(empRoleSchema, 'body'),
    employeeController.createEmployeeRole,
  )
  .patch(
    '/role/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    validate(empRoleSchema, 'body'),
    employeeController.updateEmployeeRole,
  );

/// Employee Batch Routes
router
  .get('', employeeController.getAll)
  .post(
    '/batch',
    validate(createEmployeeArraySchema, 'body'),
    employeeController.createMany,
  )
  .patch(
    '/batch',
    validate(updateEmployeeArraySchema, 'body'),
    employeeController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteEmployeeArraySchema, 'body'),
    employeeController.deleteMany,
  );

/// Employee Single Routes
router
  .get(
    '/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    employeeController.get,
  )
  .post('', validate(createEmployeeSchema), employeeController.create)
  .patch(
    '/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    validate(updateEmployeeSchema, 'body'),
    employeeController.update,
  )
  .delete(
    '/:employeeId',
    validate(employeeIdParamSchema, 'params'),
    employeeController.delete,
  );

// To get the whole history of a Single Employee
router.get('/record/:employeeId', employeeController.getSingleEmployeeData);

export default router;
