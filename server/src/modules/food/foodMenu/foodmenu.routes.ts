import { logger } from '../../../infrastructures/logger/logger.js';
import express from 'express';
import type { Router } from 'express';
import { updateFoodMenuSchema } from './validators/updateFoodMenu.validator.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { createFoodMenuSchema } from './validators/createFoodMenu.validator.js';
import { createFoodMenuArraySchema } from './validators/createFoodMenuArray.validator.js';
import { deleteFoodMenuArraySchema } from './validators/deleleFoodMenuArray.validator.js';
import { updateFoodMenuArraySchema } from './validators/updateFoodMenuArray.validator.js';
import { foodMenuIdParamSchema } from './validators/foodMenuIdParam.validator.js';
import FoodMenuController from './foodmenu.controller.js';

const router: Router = express.Router();

/*
 * IMPORTANT: foodMenuIdParamSchema should be used for 'params' only
 */

/// Object declarations
const foodMenuController = new FoodMenuController(logger);

/// Food Menu Batch Routes
router
  .get('', foodMenuController.getAll)
  .post(
    '/batch',
    validate(createFoodMenuArraySchema, 'body'),
    foodMenuController.createMany,
  )
  .patch(
    '/batch',
    validate(updateFoodMenuArraySchema, 'body'),
    foodMenuController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteFoodMenuArraySchema, 'body'),
    foodMenuController.deleteMany,
  );

/// Food Menu Single Routes
router
  .get(
    '/:id',
    validate(foodMenuIdParamSchema, 'params'),
    foodMenuController.get,
  )
  .post('', validate(createFoodMenuSchema), foodMenuController.create)
  .patch(
    '/:id',
    validate(foodMenuIdParamSchema, 'params'),
    validate(updateFoodMenuSchema, 'body'),
    foodMenuController.update,
  )
  .delete(
    '/:id',
    validate(foodMenuIdParamSchema, 'params'),
    foodMenuController.delete,
  );

export default router;
