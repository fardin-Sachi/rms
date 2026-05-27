import express, { type Router } from 'express';
import { logger } from '../../shared/libs/logger.js';
import CustomerController from './customer.controller.js';
import { validate } from '../../shared/middlewares/validate.middleware.js';
import { customerIdParamSchema } from './validators/customerIdParam.validator.js';
import { createCustomerSchema } from './validators/createCustomer.validator.js';
import { updateCustomerSchema } from './validators/updateCustomer.validator.js';

const router: Router = express.Router();

/// Object declarations
const customerController = new CustomerController(logger);

// Batch Customer routes
router
  .get('', customerController.getAll)
  .post('/batch', validate(createCustomerSchema), customerController.createMany)
  .patch(
    '/batch/:customerId',
    validate(customerIdParamSchema, 'params'),
    validate(updateCustomerSchema, 'body'),
    customerController.update,
  )
  .delete(
    '/batch/:customerId',
    validate(customerIdParamSchema, 'params'),
    customerController.delete,
  );

// Single Customer routes
router
  .get(
    '/:customerId',
    validate(customerIdParamSchema, 'params'),
    customerController.get,
  )
  .post('', validate(createCustomerSchema), customerController.create)
  .patch(
    '/:customerId',
    validate(customerIdParamSchema, 'params'),
    validate(updateCustomerSchema, 'body'),
    customerController.update,
  )
  .delete(
    '/:customerId',
    validate(customerIdParamSchema, 'params'),
    customerController.delete,
  );

export default router;
