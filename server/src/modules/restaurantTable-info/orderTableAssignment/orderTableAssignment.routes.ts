import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import OrderTableAssignmentController from './orderTableAssignment.controller.js';
import { createOrderTableAssignmentValidator } from './validators/createOrderTableAssignment.validator.js';
import { updateOrderTableAssignmentValidator } from './validators/updateOrderTableAssignment.validator.js';
import { db } from '../../../infrastructures/database/index.database.js';
import OrderTableAssignmentMapper from './mappers/orderTableAssignment.mapper.js';
import OrderTableAssignmentRepository from './orderTableAssignment.repository.js';
import OrderTableAssignmentService from './orderTableAssignment.service.js';
import { logger } from '../../../infrastructures/logger/logger.js';
import { customerOrderIdParamValidator } from '../../order/customer-order/validators/customerOrderIdParam.validator.js';

const router: Router = express.Router();

/// Object declarations
const mMapper = new OrderTableAssignmentMapper();
const mRepository = new OrderTableAssignmentRepository(db, logger);
const mService = new OrderTableAssignmentService(logger, mRepository, mMapper);
const mController = new OrderTableAssignmentController(logger, mService);

router
  .get(
    '/:orderId',
    validate(customerOrderIdParamValidator, 'params'),
    mController.getByOrderId,
  )
  .post(
    '/assign',
    validate(createOrderTableAssignmentValidator),
    mController.assign,
  )
  .patch(
    '/update',
    validate(updateOrderTableAssignmentValidator),
    mController.update,
  )
  .delete('/remove', mController.remove)
  .put(
    '/replace',
    validate(createOrderTableAssignmentValidator),
    mController.replace,
  );

export default router;
