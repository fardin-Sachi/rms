import { Router } from 'express';
import { updateFoodMenuValidator } from './validators/updateFoodMenu.validator.js';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { createFoodMenuValidator } from './validators/createFoodMenu.validator.js';
import { createFoodMenuArrayValidator } from './validators/createFoodMenuArray.validator.js';
import { deleteFoodMenuArrayValidator } from './validators/deleleFoodMenuArray.validator.js';
import { updateFoodMenuArrayValidator } from './validators/updateFoodMenuArray.validator.js';
import { foodMenuIdParamValidator } from './validators/foodMenuIdParam.validator.js';
import type FoodMenuController from './foodMenu.controller.js';

/*
 * IMPORTANT: foodMenuIdParamValidator should be used for 'params' only
 */

class FoodMenuRouter {
  public readonly router: Router;

  constructor(private readonly mController: FoodMenuController) {
    this.router = Router();
    this.registerRoutes();
  }

  private registerRoutes(): void {
    this.registerSingleRoutes();
    this.registerBatchRoutes();
  }

  // Food Menu Batch Routes
  private registerBatchRoutes(): void {
    this.router
      .get('', this.mController.getAll)
      .post(
        '/batch',
        validate(createFoodMenuArrayValidator, 'body'),
        this.mController.createMany,
      )
      .patch(
        '/batch',
        validate(updateFoodMenuArrayValidator, 'body'),
        this.mController.updateMany,
      )
      .delete(
        '/batch',
        validate(deleteFoodMenuArrayValidator, 'body'),
        this.mController.deleteMany,
      );
  }

  // Food Menu Single Routes
  private registerSingleRoutes(): void {
    this.router
      .get(
        '/:id',
        validate(foodMenuIdParamValidator, 'params'),
        this.mController.get,
      )
      .post('', validate(createFoodMenuValidator), this.mController.create)
      .patch(
        '/:id',
        validate(foodMenuIdParamValidator, 'params'),
        validate(updateFoodMenuValidator, 'body'),
        this.mController.update,
      )
      .delete(
        '/:id',
        validate(foodMenuIdParamValidator, 'params'),
        this.mController.delete,
      );
  }
}

export default FoodMenuRouter;