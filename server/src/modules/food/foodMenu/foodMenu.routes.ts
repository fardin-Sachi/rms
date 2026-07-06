import { logger } from '../../../infrastructures/logger/logger.js';
import express from 'express';
import type { Router } from 'express';
import { updateFoodMenuValidator } from './validators/updateFoodMenu.validator.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { createFoodMenuValidator } from './validators/createFoodMenu.validator.js';
import { createFoodMenuArrayValidator } from './validators/createFoodMenuArray.validator.js';
import { deleteFoodMenuArrayValidator } from './validators/deleleFoodMenuArray.validator.js';
import { updateFoodMenuArrayValidator } from './validators/updateFoodMenuArray.validator.js';
import { foodMenuIdParamValidator } from './validators/foodMenuIdParam.validator.js';
import { db } from '../../../infrastructures/database/index.database.js';
import FoodMenuService from './foodMenu.service.js';
import FoodMenuMapper from './mappers/foodMenu.mapper.js';
import FoodMenuRepository from './foodMenu.repository.js';
import FoodMenuController from './foodMenu.controller.js';

const router: Router = express.Router();

/*
 * IMPORTANT: foodMenuIdParamValidator should be used for 'params' only
 */

/// Object declarations
const mMapper = new FoodMenuMapper();
const mRepository = new FoodMenuRepository(db, logger);
const mService = new FoodMenuService(logger, mRepository, mMapper);
const mController = new FoodMenuController(logger, mService);

/// Food Menu Batch Routes
router
  .get('', mController.getAll)
  .post(
    '/batch',
    validate(createFoodMenuArrayValidator, 'body'),
    mController.createMany,
  )
  .patch(
    '/batch',
    validate(updateFoodMenuArrayValidator, 'body'),
    mController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteFoodMenuArrayValidator, 'body'),
    mController.deleteMany,
  );

/// Food Menu Single Routes
router
  .get('/:id', validate(foodMenuIdParamValidator, 'params'), mController.get)
  .post('', validate(createFoodMenuValidator), mController.create)
  .patch(
    '/:id',
    validate(foodMenuIdParamValidator, 'params'),
    validate(updateFoodMenuValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:id',
    validate(foodMenuIdParamValidator, 'params'),
    mController.delete,
  );

export default router;
