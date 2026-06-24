import express, { type Router } from 'express';
import { logger } from '../../../infrastructures/logger/logger.js';
import CustomerController from './customer.controller.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { customerIdParamSchema } from './validators/customerIdParam.validator.js';
import { createCustomerSchema } from './validators/createCustomer.validator.js';
import { updateCustomerSchema } from './validators/updateCustomer.validator.js';
import { createCustomerArraySchema } from './validators/createCustomerArray.validator.js';
import { updateCustomerArraySchema } from './validators/updateCustomerArray.validator.js';

const router: Router = express.Router();

/// Object declarations
const customerController = new CustomerController(logger);

// Batch Customer routes
router
  .get('', customerController.getAll)
  .post(
    '/batch',
    validate(createCustomerArraySchema, 'body'),
    customerController.createMany,
  )
  .patch(
    '/batch',
    validate(updateCustomerArraySchema, 'body'),
    customerController.update,
  )
  .delete('/batch', customerController.delete);

// Single Customer routes
router
  .get(
    '/:id',
    validate(customerIdParamSchema, 'params'),
    customerController.get,
  )
  .post('', validate(createCustomerSchema), customerController.create)
  .patch(
    '/:id',
    validate(customerIdParamSchema, 'params'),
    validate(updateCustomerSchema, 'body'),
    customerController.update,
  )
  .delete(
    '/:id',
    validate(customerIdParamSchema, 'params'),
    customerController.delete,
  );

export default router;
