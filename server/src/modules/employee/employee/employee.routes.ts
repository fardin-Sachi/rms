import { logger } from '../../../infrastructures/logger/logger.js';
import express from 'express';
import type { Router } from 'express';
import EmployeeController from './employee.controller.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { createEmployeeSchema } from './validators/createEmployee.validator.js';
import { employeeIdParamSchema } from './validators/employeeIdParam.validator.js';
import { updateEmployeeSchema } from './validators/updateEmployee.validator.js';
import { createEmployeeArraySchema } from './validators/createEmployeeArray.validator.js';
import { updateEmployeeArraySchema } from './validators/updateEmployeeArray.validator.js';
import { deleteEmployeeArraySchema } from './validators/deleteEmployeeArray.validator.js';
import { empAddressSchema } from './validators/empAddress.validator.js';
import { empRoleSchema } from './validators/empRole.validator.js';
import EmployeeRepository from './employee.repository.js';
import EmployeeService from './employee.service.js';

const router: Router = express.Router();

/*
 * IMPORTANT: employeeIdParamSchema should be used for 'params' only
 */

/// Object declarations
const mRepository = new EmployeeRepository(logger);
const mService = new EmployeeService(logger, mRepository);
const mController = new EmployeeController(logger, mService);

/// Employee Address Routes
router
  .get(
    '/address/:id',
    validate(employeeIdParamSchema, 'params'),
    mController.getEmployeeAddress,
  )
  .post(
    '/address/:id',
    validate(employeeIdParamSchema, 'params'),
    validate(empAddressSchema, 'body'),
    mController.createEmployeeAddress,
  )
  .patch(
    '/address/:id',
    validate(empAddressSchema, 'body'),
    mController.updateEmployeeAddress,
  );

/// Employee Role Routes
router
  .get(
    '/role/:id',
    validate(employeeIdParamSchema, 'params'),
    mController.getEmployeeRole,
  )
  .post(
    '/role/:id',
    validate(employeeIdParamSchema, 'params'),
    validate(empRoleSchema, 'body'),
    mController.createEmployeeRole,
  )
  .patch(
    '/role/:id',
    validate(employeeIdParamSchema, 'params'),
    validate(empRoleSchema, 'body'),
    mController.updateEmployeeRole,
  );

/// Employee Batch Routes
router
  .get('', mController.getAll)
  .post(
    '/batch',
    validate(createEmployeeArraySchema, 'body'),
    mController.createMany,
  )
  .patch(
    '/batch',
    validate(updateEmployeeArraySchema, 'body'),
    mController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteEmployeeArraySchema, 'body'),
    mController.deleteMany,
  );

/// Employee Single Routes
router
  .get('/:id', validate(employeeIdParamSchema, 'params'), mController.get)
  .post('', validate(createEmployeeSchema), mController.create)
  .patch(
    '/:id',
    validate(employeeIdParamSchema, 'params'),
    validate(updateEmployeeSchema, 'body'),
    mController.update,
  )
  .delete(
    '/:id',
    validate(employeeIdParamSchema, 'params'),
    mController.delete,
  );

// To get the whole history of a Single Employee
router.get('/record/:id', mController.getSingleEmployeeData);

export default router;
