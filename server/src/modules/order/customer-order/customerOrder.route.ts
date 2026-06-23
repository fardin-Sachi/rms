import { logger } from '../../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import CustomerOrderController from './customerOrder.controller.js';
import { customerOrderIdParamValidator } from './validators/customerOrderIdParam.validator.js';
import { updateCustomerOrderValidator } from './validators/updateCustomerOrder.validator.js';
import { createCustomerOrderValidator } from './validators/createCustomerOrder.validator.js';

const router: Router = express.Router();

/*
 * IMPORTANT: customerOrderIdParamValidator should be used for 'params' only
 */

/// Object declarations
const customerOrderController = new CustomerOrderController(logger);

/// Customer Order Batch Routes
// router
//   .get('', customerOrderController.getAll)
//   .post(
//     '/batch',
//     validate(createEmployeeArrayValidator, 'body'),
//     customerOrderController.createMany,
//   )
//   .patch(
//     '/batch',
//     validate(updateEmployeeArrayValidator, 'body'),
//     customerOrderController.updateMany,
//   )
//   .delete(
//     '/batch',
//     validate(deleteEmployeeArrayValidator, 'body'),
//     customerOrderController.deleteMany,
//   );

/// Customer Order Single Routes
router
  .get(
    '/:id',
    validate(customerOrderIdParamValidator, 'params'),
    customerOrderController.get,
  )
  .post(
    '',
    validate(createCustomerOrderValidator),
    customerOrderController.create,
  )
  .patch(
    '/:id',
    validate(customerOrderIdParamValidator, 'params'),
    validate(updateCustomerOrderValidator, 'body'),
    customerOrderController.update,
  )
  .delete(
    '/:id',
    validate(customerOrderIdParamValidator, 'params'),
    customerOrderController.delete,
  );

export default router;
