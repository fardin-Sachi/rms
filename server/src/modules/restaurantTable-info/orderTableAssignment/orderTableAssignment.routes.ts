import { logger } from '../../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import OrderTableAssignmentController from './orderTableAssignment.controller.js';
import { createOrderTableAssignmentValidator } from './validators/createOrderTableAssignment.validator.js';
import { updateOrderTableAssignmentValidator } from './validators/updateOrderTableAssignment.validator.js';
import { orderTableAssignmentRestaurantTableIdParamValidator } from './validators/orderTableAssignmentRestaurantTableIdParam.validator.js';
import { orderTableAssignmentCustomerOrderIdParamValidator } from './validators/orderTableAssignmentCustomerIdParam.validator.js';

const router: Router = express.Router();

/// Object declarations
const orderTableAssignmentController = new OrderTableAssignmentController(
  logger,
);

/// Order Table Assignment Batch Routes
router.get('', orderTableAssignmentController.getAll);
//   .post(
//     '/batch',
//     validate(createEmployeeArrayValidator, 'body'),
//     orderTableAssignmentController.createMany,
//   )
//   .patch(
//     '/batch',
//     validate(updateEmployeeArrayValidator, 'body'),
//     orderTableAssignmentController.updateMany,
//   )
//   .delete(
//     '/batch',
//     validate(deleteEmployeeArrayValidator, 'body'),
//     orderTableAssignmentController.deleteMany,
//   );

/// Order Table Assignment Single Routes
router
  .get(
    '/:customerId',
    validate(orderTableAssignmentCustomerOrderIdParamValidator, 'params'),
    orderTableAssignmentController.getByCustomerId,
  )
  .get(
    '/:restaurantTableId',
    validate(orderTableAssignmentRestaurantTableIdParamValidator, 'params'),
    orderTableAssignmentController.getByRestaurantTable,
  )
  .post(
    '',
    validate(createOrderTableAssignmentValidator),
    orderTableAssignmentController.create,
  )
  .patch(
    '/:customerId',
    validate(orderTableAssignmentCustomerOrderIdParamValidator, 'params'),
    validate(updateOrderTableAssignmentValidator, 'body'),
    orderTableAssignmentController.update,
  )
  .delete(
    '/:customerId',
    validate(orderTableAssignmentCustomerOrderIdParamValidator, 'params'),
    orderTableAssignmentController.delete,
  );

export default router;
