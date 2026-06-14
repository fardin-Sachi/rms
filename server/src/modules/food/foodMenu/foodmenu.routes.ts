import { logger } from '../../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import { updateFoodMenuValidator } from './validators/updateFoodMenu.validator.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { createFoodMenuValidator } from './validators/createFoodMenu.validator.js';
import { createFoodMenuArrayValidator } from './validators/createFoodMenuArray.validator.js';
import { deleteFoodMenuArrayValidator } from './validators/deleleFoodMenuArray.validator.js';
import { updateFoodMenuArrayValidator } from './validators/updateFoodMenuArray.validator.js';
import { foodMenuIdParamValidator } from './validators/foodMenuIdParam.validator.js';
import FoodMenuController from './foodmenu.controller.js';

const router: Router = express.Router();

/*
 * IMPORTANT: foodMenuIdParamValidator should be used for 'params' only
 */

/// Object declarations
const foodMenuController = new FoodMenuController(logger);

/// Food Menu Batch Routes
router
  .get('', foodMenuController.getAll)
  .post(
    '/batch',
    validate(createFoodMenuArrayValidator, 'body'),
    foodMenuController.createMany,
  )
  .patch(
    '/batch',
    validate(updateFoodMenuArrayValidator, 'body'),
    foodMenuController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteFoodMenuArrayValidator, 'body'),
    foodMenuController.deleteMany,
  );

/// Food Menu Single Routes
router
  .get(
    '/:id',
    validate(foodMenuIdParamValidator, 'params'),
    foodMenuController.get,
  )
  .post('', validate(createFoodMenuValidator), foodMenuController.create)
  .patch(
    '/:id',
    validate(foodMenuIdParamValidator, 'params'),
    validate(updateFoodMenuValidator, 'body'),
    foodMenuController.update,
  )
  .delete(
    '/:id',
    validate(foodMenuIdParamValidator, 'params'),
    foodMenuController.delete,
  );

export default router;
