import express from 'express';
import type { Router } from 'express';
import PromotionFoodController from './promotionFood.controller.js';
import PromotionFoodMapper from './mappers/promotionFood.mapper.js';
import PromotionFoodRepository from './promotionFood.repository.js';
import PromotionFoodService from './promotionFood.service.js';
import { assignPromotionFoodValidator } from './validators/assignPromotionFood.validator.js';
import { removePromotionFoodValidator } from './validators/removePromotionFood.validator.js';
import { promotionIdParamValidator } from './validators/promotionIdParam.validator.js';
import { db } from '../../../../infrastructures/database/index.database.js';
import { logger } from '../../../../infrastructures/logger/logger.js';
import { validate } from '../../../../shared/middlewares/validate.middleware.js';
import cache from '../../../../infrastructures/cache/cache.factory.js';

const router: Router = express.Router();

/// Object declarations
const mMapper = new PromotionFoodMapper();
const mRepository = new PromotionFoodRepository(db, logger);
const mService = new PromotionFoodService(logger, cache, mRepository, mMapper);
const mController = new PromotionFoodController(logger, mService);

/// Promotion Food Routes (NOT CRUD based)

router
  // Get all foods under a promotion
  .get(
    '/:promotionId',
    validate(promotionIdParamValidator, 'params'),
    mController.getByPromotionId,
  )

  // Assign multiple foods to a promotion
  .post('/assign', validate(assignPromotionFoodValidator), mController.assign)

  // Replace full food list for a promotion
  .put('/replace', validate(assignPromotionFoodValidator), mController.replace)

  // Remove a single food from a promotion
  .delete(
    '/remove',
    validate(removePromotionFoodValidator),
    mController.remove,
  );

export default router;
