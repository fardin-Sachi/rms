import { logger } from '../../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import EmployeeController from './employee.controller.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { createEmployeeValidator } from './validators/createEmployee.validator.js';
import { employeeIdParamValidator } from './validators/employeeIdParam.validator.js';
import { updateEmployeeValidator } from './validators/updateEmployee.validator.js';
import { createEmployeeArrayValidator } from './validators/createEmployeeArray.validator.js';
import { updateEmployeeArrayValidator } from './validators/updateEmployeeArray.validator.js';
import { deleteEmployeeArrayValidator } from './validators/deleteEmployeeArray.validator.js';
import { empAddressValidator } from './validators/empAddress.validator.js';
import { empRoleValidator } from './validators/empRole.validator.js';

const router: Router = express.Router();

/*
 * IMPORTANT: employeeIdParamValidator should be used for 'params' only
 */

/// Object declarations
const employeeController = new EmployeeController(logger);

/// Employee Address Routes
router
  .get(
    '/address/:id',
    validate(employeeIdParamValidator, 'params'),
    employeeController.getEmployeeAddress,
  )
  .post(
    '/address/:id',
    validate(employeeIdParamValidator, 'params'),
    validate(empAddressValidator, 'body'),
    employeeController.createEmployeeAddress,
  )
  .patch(
    '/address/:id',
    validate(empAddressValidator, 'body'),
    employeeController.updateEmployeeAddress,
  );

/// Employee Role Routes
router
  .get(
    '/role/:id',
    validate(employeeIdParamValidator, 'params'),
    employeeController.getEmployeeRole,
  )
  .post(
    '/role/:id',
    validate(employeeIdParamValidator, 'params'),
    validate(empRoleValidator, 'body'),
    employeeController.createEmployeeRole,
  )
  .patch(
    '/role/:id',
    validate(employeeIdParamValidator, 'params'),
    validate(empRoleValidator, 'body'),
    employeeController.updateEmployeeRole,
  );

/// Employee Batch Routes
router
  .get('', employeeController.getAll)
  .post(
    '/batch',
    validate(createEmployeeArrayValidator, 'body'),
    employeeController.createMany,
  )
  .patch(
    '/batch',
    validate(updateEmployeeArrayValidator, 'body'),
    employeeController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteEmployeeArrayValidator, 'body'),
    employeeController.deleteMany,
  );

/// Employee Single Routes
router
  .get(
    '/:id',
    validate(employeeIdParamValidator, 'params'),
    employeeController.get,
  )
  .post('', validate(createEmployeeValidator), employeeController.create)
  .patch(
    '/:id',
    validate(employeeIdParamValidator, 'params'),
    validate(updateEmployeeValidator, 'body'),
    employeeController.update,
  )
  .delete(
    '/:id',
    validate(employeeIdParamValidator, 'params'),
    employeeController.delete,
  );

// To get the whole history of a Single Employee
router.get('/record/:id', employeeController.getSingleEmployeeData);

export default router;
