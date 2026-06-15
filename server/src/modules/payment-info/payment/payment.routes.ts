import { logger } from '../../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import PaymentController from "./payment.controller.js";
import {paymentIdParamValidator} from "./validators/paymentIdParam.validator.js";
import {createPaymentValidator} from "./validators/createPayment.validator.js";
import {updatePaymentValidator} from "./validators/updatePayment.validator.js";

const router: Router = express.Router();

/// Object declarations
const paymentController = new PaymentController(logger);

/// Payment Single Routes
router
  .get(
    '/:id',
    validate(paymentIdParamValidator, 'params'),
    paymentController.get,
  )
  .post('', validate(createPaymentValidator), paymentController.create)
  .patch(
    '/:id',
    validate(paymentIdParamValidator, 'params'),
    validate(updatePaymentValidator, 'body'),
    paymentController.update,
  )
  .delete(
    '/:id',
    validate(paymentIdParamValidator, 'params'),
    paymentController.delete,
  );

export default router;
