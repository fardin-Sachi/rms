import express, { type Router } from 'express';
import { logger } from '../../../shared/libs/logger.js';
import CustomerController from './customer.controller.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { customerIdParamValidator } from './validators/customerIdParam.validator.js';
import { createCustomerValidator } from './validators/createCustomer.validator.js';
import { updateCustomerValidator } from './validators/updateCustomer.validator.js';
import { createCustomerArrayValidator } from './validators/createCustomerArray.validator.js';
import { updateCustomerArrayValidator } from './validators/updateCustomerArray.validator.js';

const router: Router = express.Router();

/// Object declarations
const customerController = new CustomerController(logger);

// Batch Customer routes
router
  .get('', customerController.getAll)
  .post(
    '/batch',
    validate(createCustomerArrayValidator, 'body'),
    customerController.createMany,
  )
  .patch(
    '/batch',
    validate(updateCustomerArrayValidator, 'body'),
    customerController.update,
  )
  .delete('/batch', customerController.delete);

// Single Customer routes
router
  .get(
    '/:id',
    validate(customerIdParamValidator, 'params'),
    customerController.get,
  )
  .post('', validate(createCustomerValidator), customerController.create)
  .patch(
    '/:id',
    validate(customerIdParamValidator, 'params'),
    validate(updateCustomerValidator, 'body'),
    customerController.update,
  )
  .delete(
    '/:id',
    validate(customerIdParamValidator, 'params'),
    customerController.delete,
  );

export default router;
