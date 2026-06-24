import { logger } from '../../../../infrastructures/logger/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../../shared/middlewares/validate.middleware.js';
import PromotionController from './promotion.controller.js';
import { promotionIdParamValidator } from './validators/promotionIdParam.validator.js';
import { createPromotionValidator } from './validators/createPromotion.validator.js';
import { updatePromotionValidator } from './validators/updatePromotion.validator.js';
import { createPromotionArrayValidator } from './validators/createPromotionArray.validator.js';
import { updatePromotionArraySchema } from './validators/updatePromotionArray.validator.js';
import { deletePromotionArraySchema } from './validators/deletePromotionArray.validator.js';

const router: Router = express.Router();

/*
 * IMPORTANT: employeeIdParamSchema should be used for 'params' only
 */

/// Object declarations
const promotionController = new PromotionController(logger);

// Food Promotion Batch Routes
router
  .get('', promotionController.getAll)
  .post(
    '/batch',
    validate(createPromotionArrayValidator, 'body'),
    promotionController.createMany,
  )
  .patch(
    '/batch',
    validate(updatePromotionArraySchema, 'body'),
    promotionController.updateMany,
  )
  .delete(
    '/batch',
    validate(deletePromotionArraySchema, 'body'),
    promotionController.deleteMany,
  );

/// Food Promotion Single Routes
router
  .get(
    '/:id',
    validate(promotionIdParamValidator, 'params'),
    promotionController.get,
  )
  .post('', validate(createPromotionValidator), promotionController.create)
  .patch(
    '/:id',
    validate(promotionIdParamValidator, 'params'),
    validate(updatePromotionValidator, 'body'),
    promotionController.update,
  )
  .delete(
    '/:id',
    validate(promotionIdParamValidator, 'params'),
    promotionController.delete,
  );

export default router;
