import { logger } from '../../../../infrastructures/logger/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../../shared/middlewares/validate.middleware.js';
import DiscountRuleController from './discountRule.controller.js';
import { dicountRuleIdParamValidator } from './validators/discountRuleIdParam.validator.js';
import { createDiscountRuleValidator } from './validators/createDiscountRule.validator.js';
import { updateDiscountRuleValidator } from './validators/updateDiscountRule.validator.js';
import { createDiscountRuleArrayValidator } from './validators/createDiscountRuleArray.validator.js';
import { updateDiscountRuleArrayValidator } from './validators/updatePromotionArray.validator.js';
import { deleteDiscountRuleArrayValidator } from './validators/deleteDiscountRuleArray.validator.js';
import { db } from '../../../../infrastructures/database/index.database.js';
import DiscountRuleRepository from './discountRule.repository.js';
import DiscountRuleService from './discountRule.service.js';
import DiscountRuleMapper from './mappers/discountRule.mapper.js';
import cache from '../../../../infrastructures/cache/cache.factory.js';

const router: Router = express.Router();

/*
 * IMPORTANT: discountRuleIdParamSchema should be used for 'params' only
 */

/// Object declarations
const mMapper = new DiscountRuleMapper();
const mRepository = new DiscountRuleRepository(db, logger);
const mService = new DiscountRuleService(logger, cache, mRepository, mMapper);
const mController = new DiscountRuleController(logger, mService);

/// Discount Rule Batch Routes
router
  .get('', mController.getAll)
  .post(
    '/batch',
    validate(createDiscountRuleArrayValidator, 'body'),
    mController.createMany,
  )
  .patch(
    '/batch',
    validate(updateDiscountRuleArrayValidator, 'body'),
    mController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteDiscountRuleArrayValidator, 'body'),
    mController.deleteMany,
  );

/// Food Promotion Single Routes
router
  .get('/:id', validate(dicountRuleIdParamValidator, 'params'), mController.get)
  .post('', validate(createDiscountRuleValidator), mController.create)
  .patch(
    '/:id',
    validate(updateDiscountRuleValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:id',
    validate(dicountRuleIdParamValidator, 'params'),
    mController.delete,
  );

export default router;
