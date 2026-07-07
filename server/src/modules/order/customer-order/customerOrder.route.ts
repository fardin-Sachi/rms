import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import CustomerOrderController from './customerOrder.controller.js';
import { customerOrderIdParamValidator } from './validators/customerOrderIdParam.validator.js';
import { updateCustomerOrderValidator } from './validators/updateCustomerOrder.validator.js';
import { createCustomerOrderValidator } from './validators/createCustomerOrder.validator.js';
import { db } from '../../../infrastructures/database/index.database.js';
import CustomerOrderRepository from './customerOrder.repository.js';
import CustomerOrderService from './customerOrder.service.js';
import CustomerOrderMapper from './mappers/customerOrder.mapper.js';
import { logger } from '../../../infrastructures/logger/logger.js';
import cache from '../../../infrastructures/cache/cache.factory.js';

const router: Router = express.Router();

/*
 * IMPORTANT: customerOrderIdParamValidator should be used for 'params' only
 */

/// Object declarations
const mMapper = new CustomerOrderMapper();
const mRepository = new CustomerOrderRepository(db, logger);
const mService = new CustomerOrderService(logger, cache, mRepository, mMapper);
const mController = new CustomerOrderController(logger, mService);

/// Customer Order Batch Routes
// router
//   .get('', mController.getAll)
//   .post(
//     '/batch',
//     validate(createEmployeeArrayValidator, 'body'),
//     mController.createMany,
//   )
//   .patch(
//     '/batch',
//     validate(updateEmployeeArrayValidator, 'body'),
//     mController.updateMany,
//   )
//   .delete(
//     '/batch',
//     validate(deleteEmployeeArrayValidator, 'body'),
//     mController.deleteMany,
//   );

/// Customer Order Single Routes
router
  .get(
    '/:id',
    validate(customerOrderIdParamValidator, 'params'),
    mController.get,
  )
  .post('', validate(createCustomerOrderValidator), mController.create)
  .patch(
    '/:id',
    validate(customerOrderIdParamValidator, 'params'),
    validate(updateCustomerOrderValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:id',
    validate(customerOrderIdParamValidator, 'params'),
    mController.delete,
  );

export default router;
