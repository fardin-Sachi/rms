import express, { type Router } from 'express';
import { logger } from '../../../infrastructures/logger/logger.js';
import CustomerController from './customer.controller.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { customerIdParamValidator } from './validators/customerIdParam.validator.js';
import { createCustomerValidator } from './validators/createCustomer.validator.js';
import { updateCustomerValidator } from './validators/updateCustomer.validator.js';
import { createCustomerArrayValidator } from './validators/createCustomerArray.validator.js';
import { updateCustomerArrayValidator } from './validators/updateCustomerArray.validator.js';
import { db } from '../../../infrastructures/database/index.database.js';
import CustomerRepository from './customer.repository.js';
import CustomerService from './customer.service.js';
import CustomerMapper from './mappers/customer.mapper.js';
import cache from '../../../infrastructures/cache/cache.factory.js';

const router: Router = express.Router();

/// Object declarations
const mMapper = new CustomerMapper();
const mRepository = new CustomerRepository(db, logger);
const mService = new CustomerService(logger, cache, mRepository, mMapper);
const mController = new CustomerController(logger, mService);

// Batch Customer routes
router
  .get('', mController.getAll)
  .post(
    '/batch',
    validate(createCustomerArrayValidator, 'body'),
    mController.createMany,
  )
  .patch(
    '/batch',
    validate(updateCustomerArrayValidator, 'body'),
    mController.update,
  )
  .delete('/batch', mController.delete);

// Single Customer routes
router
  .get('/:id', validate(customerIdParamValidator, 'params'), mController.get)
  .post('', validate(createCustomerValidator), mController.create)
  .patch(
    '/:id',
    validate(customerIdParamValidator, 'params'),
    validate(updateCustomerValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:id',
    validate(customerIdParamValidator, 'params'),
    mController.delete,
  );

export default router;
