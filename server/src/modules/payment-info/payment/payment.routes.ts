import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import PaymentController from './payment.controller.js';
import { paymentIdParamValidator } from './validators/paymentIdParam.validator.js';
import { createPaymentValidator } from './validators/createPayment.validator.js';
import { updatePaymentValidator } from './validators/updatePayment.validator.js';
import { db } from '../../../infrastructures/database/index.database.js';
import PaymentMapper from './mappers/payment.mapper.js';
import PaymentRepository from './payment.repository.js';
import PaymentService from './payment.service.js';
import { logger } from '../../../infrastructures/logger/logger.js';

const router: Router = express.Router();

/// Object declarations
const mMapper = new PaymentMapper();
const mRepository = new PaymentRepository(db, logger);
const mService = new PaymentService(logger, mRepository, mMapper);
const mController = new PaymentController(logger, mService);

/// Payment Single Routes
router
  .get('/:id', validate(paymentIdParamValidator, 'params'), mController.get)
  .post('', validate(createPaymentValidator), mController.create)
  .patch(
    '/:id',
    validate(paymentIdParamValidator, 'params'),
    validate(updatePaymentValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:id',
    validate(paymentIdParamValidator, 'params'),
    mController.delete,
  );

export default router;
