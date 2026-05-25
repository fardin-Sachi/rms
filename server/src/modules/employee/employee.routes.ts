import { logger } from '../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import EmployeeController from './employee.controller.js';
import { validate } from '../../shared/middlewares/validate.middleware.js';
import { createEmployeeSchema } from './validators/createEmployee.schema.js';
import { employeeIdParamSchema } from './validators/employeeIdParam.schema.js';
import { updateEmployeeSchema } from './validators/updateEmployee.schema.js';
import { createEmployeeArraySchema } from './validators/createEmployeeArray.schema.js';
import { updateEmployeeArraySchema } from './validators/updateEmployeeArray.schema.js';
import { deleteEmployeeArraySchema } from './validators/deleteEmployeeArray.schema.js';

const router: Router = express.Router();

/// Object declarations
const employeeController = new EmployeeController(logger);

/// Employee Address Routes
router
  .get(
    '/address/:employeeId',
    // TODO: Add validation
    employeeController.getEmployeeAddress,
  )
  .post(
    '/address',
    // TODO: Add validation
    employeeController.createEmployeeAddress,
  )
  .patch(
    '/address',
    // TODO: Add validation
    employeeController.updateEmployeeAddress,
  );

/// Employee Role Routes
router
  .get(
    '/role/:employeeId',
    // TODO: Add validation
    employeeController.getEmployeeRole,
  )
  .post(
    '/role',
    // TODO: Add validation
    employeeController.createEmployeeRole,
  )
  .patch(
    '/role',
    // TODO: Add validation
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
    '/:id',
    validate(employeeIdParamSchema, 'params'),
    employeeController.get,
  )
  .post('', validate(createEmployeeSchema), employeeController.create)
  .patch(
    '/:id',
    validate(employeeIdParamSchema, 'params'),
    validate(updateEmployeeSchema, 'body'),
    employeeController.update,
  )
  .delete(
    '/:id',
    validate(employeeIdParamSchema, 'params'),
    employeeController.delete,
  );

export default router;
