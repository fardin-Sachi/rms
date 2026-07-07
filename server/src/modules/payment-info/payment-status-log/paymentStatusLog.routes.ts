import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { paymentStatusLogIdParamValidator } from './validators/paymentStatusLogIdParam.validator.js';
import { createPaymentStatusLogValidator } from './validators/createPaymentStatusLog.validator.js';
import PaymentStatusLogController from './paymentStatusLog.controller.js';
import { db } from '../../../infrastructures/database/index.database.js';
import PaymentStatusLogMapper from './mappers/paymentStatusLog.mapper.js';
import PaymentStatusLogRepository from './paymentStatusLog.repository.js';
import PaymentStatusLogService from './paymentStatusLog.service.js';
import { logger } from '../../../infrastructures/logger/logger.js';
import cache from '../../../infrastructures/cache/cache.factory.js';

const router: Router = express.Router();

/*
 * IMPORTANT: paymentStatusLogIdParamValidator should be used for 'params' only
 */

/// Object declarations
const mMapper = new PaymentStatusLogMapper();
const mRepository = new PaymentStatusLogRepository(db, logger);
const mService = new PaymentStatusLogService(
  logger,
  cache,
  mRepository,
  mMapper,
);
const mController = new PaymentStatusLogController(logger, mService);

/// Payment Status Log Single Routes
router
  .get(
    '/:id',
    validate(paymentStatusLogIdParamValidator, 'params'),
    mController.get,
  )
  .post('', validate(createPaymentStatusLogValidator), mController.create);
// .patch(
//   '/:id',
//   validate(paymentStatusLogIdParamValidator, 'params'),
//   validate(updatePaymentStatusLogValidator, 'body'),
//   mController.update,
// )
// .delete(
//   '/:id',
//   validate(paymentStatusLogIdParamValidator, 'params'),
//   mController.delete,
// )

export default router;
