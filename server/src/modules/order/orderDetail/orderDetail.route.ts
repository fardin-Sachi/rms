import { logger } from '../../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import OrderDetailController from "./orderDetail.controller.js";
import {createOrderDetailValidator} from "./validators/createOrderDetail.validator.js";
import {updateOrderDetailValidator} from "./validators/updateOrderDetail.validator.js";
import {orderDetailIdParamValidator} from "./validators/orderDetailIdParam.validator.js";

const router: Router = express.Router();

/*
 * IMPORTANT: orderDetailIdParamValidator should be used for 'params' only
 */

/// Object declarations
const orderDetailController = new OrderDetailController(logger);

/// Order Detail Batch Routes
// router
//   .get('', orderDetailController.getAll)
//   .post(
//     '/batch',
//     validate(createOrderDetailValidator, 'body'),
//     orderDetailController.createMany,
//   )
//   .patch(
//     '/batch',
//     validate(updateOrderDetailValidator, 'body'),
//     orderDetailController.updateMany,
//   )
  // .delete(
  //   '/batch',
  //   validate(deleteOr, 'body'),
  //   orderDetailController.deleteMany,
  // )
// ;

/// Order Detail Single Routes
router
  .get(
    '/:id',
    validate(orderDetailIdParamValidator, 'params'),
    orderDetailController.get,
  )
  .post('', validate(createOrderDetailValidator), orderDetailController.create)
  .patch(
    '/:id',
    validate(orderDetailIdParamValidator, 'params'),
    validate(updateOrderDetailValidator, 'body'),
    orderDetailController.update,
  )
  .delete(
    '/:id',
    validate(orderDetailIdParamValidator, 'params'),
    orderDetailController.delete,
  );

export default router;
