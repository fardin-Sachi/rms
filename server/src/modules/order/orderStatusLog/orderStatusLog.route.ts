import { logger } from '../../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import OrderStatusLogController from "./orderStatusLog.controller.js";
import {createOrderStatusLogValidator} from "./validators/createOrderStatusLog.validator.js";
import {updateOrderStatusLogValidator} from "./validators/UpdateOrderStatusLog.validator.js";
import {orderStatusLogIdParamValidator} from "./validators/orderStatusLogIdParam.validator.js";

const router: Router = express.Router();

/// Object declarations
const orderStatusLogController = new OrderStatusLogController(logger);

/// Order Status Single Routes
router
  .get(
    '/:id',
    validate(orderStatusLogIdParamValidator, 'params'),
    orderStatusLogController.get,
  )
  .post('', validate(createOrderStatusLogValidator), orderStatusLogController.create)
  .patch(
    '/:id',
    validate(orderStatusLogIdParamValidator, 'params'),
    validate(updateOrderStatusLogValidator, 'body'),
    orderStatusLogController.update,
  );

export default router;
