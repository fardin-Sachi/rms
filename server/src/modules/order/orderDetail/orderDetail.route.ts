import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import OrderDetailController from './orderDetail.controller.js';
import { createOrderDetailValidator } from './validators/createOrderDetail.validator.js';
import { updateOrderDetailValidator } from './validators/updateOrderDetail.validator.js';
import { orderDetailIdParamValidator } from './validators/orderDetailIdParam.validator.js';
import { db } from '../../../infrastructures/database/index.database.js';
import OrderDetailMapper from './mappers/orderDetail.mapper.js';
import OrderDetailRepository from './orderDetail.repository.js';
import OrderDetailService from './orderDetail.service.js';
import { logger } from '../../../infrastructures/logger/logger.js';
import cache from '../../../infrastructures/cache/cache.factory.js';

const router: Router = express.Router();

/*
 * IMPORTANT: orderDetailIdParamValidator should be used for 'params' only
 */

/// Object declarations
const mMapper = new OrderDetailMapper();
const mRepository = new OrderDetailRepository(db, logger);
const mService = new OrderDetailService(logger, cache, mRepository, mMapper);
const mController = new OrderDetailController(logger, mService);

/// Order Detail Batch Routes
// router
//   .get('', mController.getAll)
//   .post(
//     '/batch',
//     validate(createOrderDetailValidator, 'body'),
//     mController.createMany,
//   )
//   .patch(
//     '/batch',
//     validate(updateOrderDetailValidator, 'body'),
//     mController.updateMany,
//   )
// .delete(
//   '/batch',
//   validate(deleteOr, 'body'),
//   mController.deleteMany,
// )
// ;

/// Order Detail Single Routes
router
  .get('/:id', validate(orderDetailIdParamValidator, 'params'), mController.get)
  .post('', validate(createOrderDetailValidator), mController.create)
  .patch(
    '/:id',
    validate(orderDetailIdParamValidator, 'params'),
    validate(updateOrderDetailValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:id',
    validate(orderDetailIdParamValidator, 'params'),
    mController.delete,
  );

export default router;
