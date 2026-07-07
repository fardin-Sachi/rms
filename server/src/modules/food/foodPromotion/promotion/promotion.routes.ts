import { logger } from '../../../../infrastructures/logger/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../../shared/middlewares/validate.middleware.js';
import PromotionController from './promotion.controller.js';
import { promotionIdParamValidator } from './validators/promotionIdParam.validator.js';
import { createPromotionValidator } from './validators/createPromotion.validator.js';
import { updatePromotionValidator } from './validators/updatePromotion.validator.js';
import { createPromotionArrayValidator } from './validators/createPromotionArray.validator.js';
import { updatePromotionArrayValidator } from './validators/updatePromotionArray.validator.js';
import { deletePromotionArraySchema } from './validators/deletePromotionArray.validator.js';
import { db } from '../../../../infrastructures/database/index.database.js';
import PromotionMapper from './mappers/promotion.mapper.js';
import PromotionRepository from './promotion.repository.js';
import PromotionService from './promotion.service.js';
import cache from '../../../../infrastructures/cache/cache.factory.js';

const router: Router = express.Router();

/*
 * IMPORTANT: employeeIdParamSchema should be used for 'params' only
 */

/// Object declarations
const mMapper = new PromotionMapper();
const mRepository = new PromotionRepository(db, logger);
const mService = new PromotionService(logger, cache, mRepository, mMapper);
const mController = new PromotionController(logger, mService);

// Food Promotion Batch Routes
router
  .get('', mController.getAll)
  .post(
    '/batch',
    validate(createPromotionArrayValidator, 'body'),
    mController.createMany,
  )
  .patch(
    '/batch',
    validate(updatePromotionArrayValidator, 'body'),
    mController.updateMany,
  )
  .delete(
    '/batch',
    validate(deletePromotionArraySchema, 'body'),
    mController.deleteMany,
  );

/// Food Promotion Single Routes
router
  .get('/:id', validate(promotionIdParamValidator, 'params'), mController.get)
  .post('', validate(createPromotionValidator), mController.create)
  .patch(
    '/:id',
    validate(promotionIdParamValidator, 'params'),
    validate(updatePromotionValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:id',
    validate(promotionIdParamValidator, 'params'),
    mController.delete,
  );

export default router;
