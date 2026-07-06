import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import OrderStatusLogController from './orderStatusLog.controller.js';
import { createOrderStatusLogValidator } from './validators/createOrderStatusLog.validator.js';
import { updateOrderStatusLogValidator } from './validators/UpdateOrderStatusLog.validator.js';
import { orderStatusLogIdParamValidator } from './validators/orderStatusLogIdParam.validator.js';
import { db } from '../../../infrastructures/database/index.database.js';
import OrderStatusLogMapper from './mappers/orderStatusLog.mapper.js';
import OrderStatusLogRepository from './orderStatusLog.repository.js';
import OrderStatusLogService from './orderStatusLog.service.js';
import { logger } from '../../../infrastructures/logger/logger.js';

const router: Router = express.Router();

/// Object declarations
const mMapper = new OrderStatusLogMapper();
const mRepository = new OrderStatusLogRepository(db, logger);
const mService = new OrderStatusLogService(logger, mRepository, mMapper);
const mController = new OrderStatusLogController(logger, mService);

/// Order Status Single Routes
router
  .get(
    '/:id',
    validate(orderStatusLogIdParamValidator, 'params'),
    mController.get,
  )
  .post('', validate(createOrderStatusLogValidator), mController.create)
  .patch(
    '/:id',
    validate(orderStatusLogIdParamValidator, 'params'),
    validate(updateOrderStatusLogValidator, 'body'),
    mController.update,
  );

export default router;
