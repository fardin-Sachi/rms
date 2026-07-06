import { logger } from '../../../infrastructures/logger/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import EmployeeRepository from '../../employee-info/employee/employee.repository.js';
import EmployeeService from '../../employee-info/employee/employee.service.js';
import EmployeeController from '../../employee-info/employee/employee.controller.js';
import { employeeIdParamValidator } from '../../employee-info/employee/validators/employeeIdParam.validator.js';
import { db } from '../../../infrastructures/database/index.database.js';
import EmployeeMapper from '../../employee-info/employee/mappers/employee.mapper.js';
import { empAddressValidator } from '../../employee-info/employee/validators/empAddress.validator.js';
import { empRoleValidator } from '../../employee-info/employee/validators/empRole.validator.js';
import { createEmployeeArrayValidator } from '../../employee-info/employee/validators/createEmployeeArray.validator.js';
import { updateEmployeeArrayValidator } from '../../employee-info/employee/validators/updateEmployeeArray.validator.js';
import { deleteEmployeeArrayValidator } from '../../employee-info/employee/validators/deleteEmployeeArray.validator.js';
import { createEmployeeValidator } from '../../employee-info/employee/validators/createEmployee.validator.js';
import { updateEmployeeValidator } from '../../employee-info/employee/validators/updateEmployee.validator.js';

const router: Router = express.Router();

/*
 * IMPORTANT: employeeIdParamValidator should be used for 'params' only
 */

/// Object declarations
const mMapper = new EmployeeMapper();
const mRepository = new EmployeeRepository(db, logger);
const mService = new EmployeeService(logger, mRepository, mMapper);
const mController = new EmployeeController(logger, mService);

/// Employee Address Routes
router
  .get(
    '/address/:id',
    validate(employeeIdParamValidator, 'params'),
    mController.getEmployeeAddress,
  )
  .post(
    '/address/:id',
    validate(employeeIdParamValidator, 'params'),
    validate(empAddressValidator, 'body'),
    mController.createEmployeeAddress,
  )
  .patch(
    '/address/:id',
    validate(empAddressValidator, 'body'),
    mController.updateEmployeeAddress,
  );

/// Employee Role Routes
router
  .get(
    '/role/:id',
    validate(employeeIdParamValidator, 'params'),
    mController.getEmployeeRole,
  )
  .post(
    '/role/:id',
    validate(employeeIdParamValidator, 'params'),
    validate(empRoleValidator, 'body'),
    mController.createEmployeeRole,
  )
  .patch(
    '/role/:id',
    validate(employeeIdParamValidator, 'params'),
    validate(empRoleValidator, 'body'),
    mController.updateEmployeeRole,
  );

/// Employee Batch Routes
router
  .get('', mController.getAll)
  .post(
    '/batch',
    validate(createEmployeeArrayValidator, 'body'),
    mController.createMany,
  )
  .patch(
    '/batch',
    validate(updateEmployeeArrayValidator, 'body'),
    mController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteEmployeeArrayValidator, 'body'),
    mController.deleteMany,
  );

/// Employee Single Routes
router
  .get('/:id', validate(employeeIdParamValidator, 'params'), mController.get)
  .post('', validate(createEmployeeValidator), mController.create)
  .patch(
    '/:id',
    validate(employeeIdParamValidator, 'params'),
    validate(updateEmployeeValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:id',
    validate(employeeIdParamValidator, 'params'),
    mController.delete,
  );

// To get the whole history of a Single Employee
router.get('/record/:id', mController.getSingleEmployeeData);

export default router;
