import { logger } from '../../../../infrastructures/logger/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../../shared/middlewares/validate.middleware.js';
import PromotionFoodController from './promotionFood.controller.js';
import { promotionIdParamValidator } from './validators/promotionIdParam.validator.js';
import { removePromotionFoodValidator } from './validators/removePromotionFood.validator.js';
import { assignPromotionFoodValidator } from './validators/assignPromotionFood.validator.js';

const router: Router = express.Router();

/// Object declarations
const promotionFoodController = new PromotionFoodController(logger);

router
  .get('/', promotionFoodController.getAll)
  .get(
    '/promotion/:promotionId',
    validate(promotionIdParamValidator, 'params'),
    promotionFoodController.getByPromotionId,
  )
  .post(
    '/',
    validate(assignPromotionFoodValidator),
    promotionFoodController.assign,
  )
  .delete(
    '/',
    validate(removePromotionFoodValidator),
    promotionFoodController.remove,
  );

export default router;
