import { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { createEmployeeValidator } from './validators/createEmployee.validator.js';
import { employeeIdParamValidator } from './validators/employeeIdParam.validator.js';
import { updateEmployeeValidator } from './validators/updateEmployee.validator.js';
import { createEmployeeArrayValidator } from './validators/createEmployeeArray.validator.js';
import { updateEmployeeArrayValidator } from './validators/updateEmployeeArray.validator.js';
import { deleteEmployeeArrayValidator } from './validators/deleteEmployeeArray.validator.js';
import { empAddressValidator } from './validators/empAddress.validator.js';
import { empRoleValidator } from './validators/empRole.validator.js';
import type EmployeeController from './employee.controller.js';

/*
 * IMPORTANT: employeeIdParamValidator should be used for 'params' only
 */

class EmployeeRouter {
  public readonly router: Router;

  constructor(private readonly mController: EmployeeController) {
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.registerBatchRoutes();
    this.registerSingleRoutes();
    this.registerEmployeeAddressRoutes();
    this.registerEmployeeRoleRoutes();
    this.registerEmployeeHistoryRoutes();
  }

  // Batch Employee routes
  private registerBatchRoutes(): void {
    this.router
      .get('', this.mController.getAll)
      .post(
        '/batch',
        validate(createEmployeeArrayValidator, 'body'),
        this.mController.createMany,
      )
      .patch(
        '/batch',
        validate(updateEmployeeArrayValidator, 'body'),
        this.mController.updateMany,
      )
      .delete(
        '/batch',
        validate(deleteEmployeeArrayValidator, 'body'),
        this.mController.deleteMany,
      );
  }

  // Single Employee routes
  private registerSingleRoutes(): void {
    this.router
      .get(
        '/:id',
        validate(employeeIdParamValidator, 'params'),
        this.mController.get,
      )
      .post('', validate(createEmployeeValidator), this.mController.create)
      .patch(
        '/:id',
        validate(employeeIdParamValidator, 'params'),
        validate(updateEmployeeValidator, 'body'),
        this.mController.update,
      )
      .delete(
        '/:id',
        validate(employeeIdParamValidator, 'params'),
        this.mController.delete,
      );
  }

  // Employee Address routes
  private registerEmployeeAddressRoutes(): void {
    this.router
      .get(
        '/address/:id',
        validate(employeeIdParamValidator, 'params'),
        this.mController.getEmployeeAddress,
      )
      .post(
        '/address/:id',
        validate(employeeIdParamValidator, 'params'),
        validate(empAddressValidator, 'body'),
        this.mController.createEmployeeAddress,
      )
      .patch(
        '/address/:id',
        validate(empAddressValidator, 'body'),
        this.mController.updateEmployeeAddress,
      );
  }

  // Employee Role routes
  private registerEmployeeRoleRoutes(): void {
    this.router
      .get(
        '/role/:id',
        validate(employeeIdParamValidator, 'params'),
        this.mController.getEmployeeRole,
      )
      .post(
        '/role/:id',
        validate(employeeIdParamValidator, 'params'),
        validate(empRoleValidator, 'body'),
        this.mController.createEmployeeRole,
      )
      .patch(
        '/role/:id',
        validate(employeeIdParamValidator, 'params'),
        validate(empRoleValidator, 'body'),
        this.mController.updateEmployeeRole,
      );
  }

  // Employee Role routes
  private registerEmployeeHistoryRoutes(): void {
    this.router.get('/record/:id', this.mController.getSingleEmployeeData);
  }
}

export default EmployeeRouter;