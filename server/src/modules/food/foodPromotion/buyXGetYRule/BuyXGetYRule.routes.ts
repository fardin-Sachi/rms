import express from 'express';
import type { Router } from 'express';
import { db } from '../../../../infrastructures/database/index.database.js';
import { logger } from '../../../../infrastructures/logger/logger.js';
import { validate } from '../../../../shared/middlewares/validate.middleware.js';
import { buyXGetYRuleIdParamValidator } from './validators/buyXGetYRuleIdParam.validator.js';
import { createBuyXGetYRuleValidator } from './validators/createBuyXGetYRule.validator.js';
import { updateBuyXGetYRuleValidator } from './validators/updateBuyXGetYRule.validator.js';
import { createBuyXGetYRuleArrayValidator } from './validators/createBuyXGetYRuleArray.validator.js';
import { updateBuyXGetYRuleArrayValidator } from './validators/updateBuyXGetYRuleArray.validator.js';
import { deleteBuyXGetYRuleArrayValidator } from './validators/deleteBuyXGetYRuleArray.validator.js';
import BuyXGetYRuleController from './BuyXGetYRule.controller.js';
import BuyXGetYRuleRepository from './BuyXGetYRule.repository.js';
import BuyXGetYRuleService from './BuyXGetYRule.service.js';
import BuyXGetYRuleMapper from './mappers/buyXGetYRule.mapper.js';
import cache from '../../../../infrastructures/cache/cache.factory.js';

const router: Router = express.Router();

/*
 * IMPORTANT: buyXGetYRuleIdParamValidator should be used for 'params' only
 */

/// Object declarations
const mMapper = new BuyXGetYRuleMapper();
const mRepository = new BuyXGetYRuleRepository(db, logger);
const mService = new BuyXGetYRuleService(logger, cache, mRepository, mMapper);
const mController = new BuyXGetYRuleController(logger, mService);

/// Buy X Get Y Rule Batch Routes
// router
//   .get('', mController.getAll)
//   .post(
//     '/batch',
//     validate(createBuyXGetYRuleArrayValidator, 'body'),
//     mController.createMany,
//   )
//   .patch(
//     '/batch',
//     validate(updateBuyXGetYRuleArrayValidator, 'body'),
//     mController.updateMany,
//   )
//   .delete(
//     '/batch',
//     validate(deleteBuyXGetYRuleArrayValidator, 'body'),
//     mController.deleteMany,
//   );
router
  .get('', mController.getAll)
  .post(
    '/batch',
    validate(createBuyXGetYRuleArrayValidator, 'body'),
    mController.createMany,
  )
  .patch(
    '/batch',
    validate(updateBuyXGetYRuleArrayValidator, 'body'),
    mController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteBuyXGetYRuleArrayValidator, 'body'),
    mController.deleteMany,
  );

/// Food Promotion Single Routes
router
  .get(
    '/:promotionId',
    validate(buyXGetYRuleIdParamValidator, 'params'),
    mController.get,
  )
  .post('', validate(createBuyXGetYRuleValidator, 'body'), mController.create)
  .patch(
    '/:promotionId',
    validate(buyXGetYRuleIdParamValidator, 'params'),
    validate(updateBuyXGetYRuleValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:promotionId',
    validate(buyXGetYRuleIdParamValidator, 'params'),
    mController.delete,
  );

export default router;
