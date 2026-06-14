import { logger } from '../../../../shared/libs/logger.js';
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

const router: Router = express.Router();

/*
 * IMPORTANT: discountRuleIdParamSchema should be used for 'params' only
 */

/// Object declarations
const discountRuleController = new DiscountRuleController(logger);

/// Discount Rule Batch Routes
router
  .get('', discountRuleController.getAll)
  .post(
    '/batch',
    validate(createDiscountRuleArrayValidator, 'body'),
    discountRuleController.createMany,
  )
  .patch(
    '/batch',
    validate(updateDiscountRuleArrayValidator, 'body'),
    discountRuleController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteDiscountRuleArrayValidator, 'body'),
    discountRuleController.deleteMany,
  );

/// Food Promotion Single Routes
router
  .get(
    '/:id',
    validate(dicountRuleIdParamValidator, 'params'),
    discountRuleController.get,
  )
  .post(
    '',
    validate(createDiscountRuleValidator),
    discountRuleController.create,
  )
  .patch(
    '/:id',
    validate(updateDiscountRuleValidator, 'body'),
    discountRuleController.update,
  )
  .delete(
    '/:id',
    validate(dicountRuleIdParamValidator, 'params'),
    discountRuleController.delete,
  );

export default router;
