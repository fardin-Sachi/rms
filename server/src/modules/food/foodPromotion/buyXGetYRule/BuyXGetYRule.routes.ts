import { logger } from '../../../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../../shared/middlewares/validate.middleware.js';
import BuyXGetYRuleController from './BuyXGetYRule.controller.js';
import { buyXGetYRuleIdParamValidator } from './validators/buyXGetYRuleIdParam.validator.js';
import { createBuyXGetYRuleValidator } from './validators/createBuyXGetYRule.validator.js';
import { updateBuyXGetYRuleValidator } from './validators/updateBuyXGetYRule.validator.js';
import {createBuyXGetYRuleArrayValidator} from "./validators/createBuyXGetYRuleArray.validator.js";
import {updateBuyXGetYRuleArraySchema} from "./validators/updateBuyXGetYRuleArray.validator.js";
import {deleteBuyXGetYRuleArraySchema} from "./validators/deleteBuyXGetYRuleArray.validator.js";

const router: Router = express.Router();

/*
 * IMPORTANT: buyXGetYRuleIdParamValidator should be used for 'params' only
 */

/// Object declarations
const buyXGetYRuleController = new BuyXGetYRuleController(logger);

/// Buy X Get Y Rule Batch Routes
router
  .get('', buyXGetYRuleController.getAll)
  .post(
    '/batch',
    validate(createBuyXGetYRuleArrayValidator, 'body'),
    buyXGetYRuleController.createMany,
  )
  .patch(
    '/batch',
    validate(updateBuyXGetYRuleArraySchema, 'body'),
    buyXGetYRuleController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteBuyXGetYRuleArraySchema, 'body'),
    buyXGetYRuleController.deleteMany,
  );

/// Food Promotion Single Routes
router
  .get(
    '/:promotionId',
    validate(buyXGetYRuleIdParamValidator, 'params'),
    buyXGetYRuleController.get,
  )
  .post(
    '',
    validate(createBuyXGetYRuleValidator, 'body'),
    buyXGetYRuleController.create,
  )
  .patch(
    '/:promotionId',
    validate(buyXGetYRuleIdParamValidator, 'params'),
    validate(updateBuyXGetYRuleValidator, 'body'),
    buyXGetYRuleController.update,
  )
  .delete(
    '/:promotionId',
    validate(buyXGetYRuleIdParamValidator, 'params'),
    buyXGetYRuleController.delete,
  );

export default router;
