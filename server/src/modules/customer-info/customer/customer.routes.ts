import { Router } from 'express';
import CustomerController from './customer.controller.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { customerIdParamValidator } from './validators/customerIdParam.validator.js';
import { createCustomerValidator } from './validators/createCustomer.validator.js';
import { updateCustomerValidator } from './validators/updateCustomer.validator.js';
import { createCustomerArrayValidator } from './validators/createCustomerArray.validator.js';
import { updateCustomerArrayValidator } from './validators/updateCustomerArray.validator.js';

class CustomerRouter {
  public readonly router: Router;

  constructor(private readonly mController: CustomerController) {
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.registerBatchRoutes();
    this.registerSingleRoutes();
  }

  // Batch Customer routes
  private registerBatchRoutes(): void {
    this.router
      .get('/', this.mController.getAll)
      .post(
        '/batch',
        validate(createCustomerArrayValidator, 'body'),
        this.mController.createMany,
      )
      .patch(
        '/batch',
        validate(updateCustomerArrayValidator, 'body'),
        this.mController.updateMany,
      )
      .delete('/batch', this.mController.deleteMany);
  }

  // Single Customer routes
  private registerSingleRoutes(): void {
    this.router
      .get(
        '/:id',
        validate(customerIdParamValidator, 'params'),
        this.mController.get,
      )
      .post(
        '/',
        validate(createCustomerValidator, 'body'),
        this.mController.create,
      )
      .patch(
        '/:id',
        validate(customerIdParamValidator, 'params'),
        validate(updateCustomerValidator, 'body'),
        this.mController.update,
      )
      .delete(
        '/:id',
        validate(customerIdParamValidator, 'params'),
        this.mController.delete,
      );
  }
}

export default CustomerRouter;
