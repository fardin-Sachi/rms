import { logger } from '../../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { paymentStatusLogIdParamValidator } from './validators/paymentStatusLogIdParam.validator.js';
import { createPaymentStatusLogValidator } from './validators/createPaymentStatusLog.validator.js';
import PaymentStatusLogController from './paymentStatusLog.controller.js';

const router: Router = express.Router();

/*
 * IMPORTANT: paymentStatusLogIdParamValidator should be used for 'params' only
 */

/// Object declarations
const paymentStatusLogController = new PaymentStatusLogController(logger);

/// Payment Status Log Single Routes
router
  .get(
    '/:id',
    validate(paymentStatusLogIdParamValidator, 'params'),
    paymentStatusLogController.get,
  )
  .post(
    '',
    validate(createPaymentStatusLogValidator),
    paymentStatusLogController.create,
  );
// .patch(
//   '/:id',
//   validate(paymentStatusLogIdParamValidator, 'params'),
//   validate(updatePaymentStatusLogValidator, 'body'),
//   paymentStatusLogController.update,
// )
// .delete(
//   '/:id',
//   validate(paymentStatusLogIdParamValidator, 'params'),
//   paymentStatusLogController.delete,
// )

export default router;
