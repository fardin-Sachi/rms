import { logger } from '../../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import {createRestaurantTableArrayValidator} from "./validators/createRestaurantTableArray.validator.js";
import {updateRestaurantTableArrayValidator} from "./validators/updateRestaurantTableArray.validator.js";
import {deleteRestaurantTableArrayValidator} from "./validators/deleteRestaurantTableArray.validator.js";
import {restaurantTableIdParamValidator} from "./validators/restaurantTableIdParam.validator.js";
import {createRestaurantTableValidator} from "./validators/createRestaurantTable.validator.js";
import {updateRestaurantTableValidator} from "./validators/updateRestaurantTable.validator.js";
import RestaurantTableController from "./restaurantTable.controller.js";

const router: Router = express.Router();

/// Object declarations
const restaurantTableController = new RestaurantTableController(logger);

/// Employee Batch Routes
router
  .get('', restaurantTableController.getAll)
  .post(
    '/batch',
    validate(createRestaurantTableArrayValidator, 'body'),
    restaurantTableController.createMany,
  )
  .patch(
    '/batch',
    validate(updateRestaurantTableArrayValidator, 'body'),
    restaurantTableController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteRestaurantTableArrayValidator, 'body'),
    restaurantTableController.deleteMany,
  );

/// Employee Single Routes
router
  .get(
    '/:id',
    validate(restaurantTableIdParamValidator, 'params'),
    restaurantTableController.get,
  )
  .post('', validate(createRestaurantTableValidator), restaurantTableController.create)
  .patch(
    '/:id',
    validate(restaurantTableIdParamValidator, 'params'),
    validate(updateRestaurantTableValidator, 'body'),
    restaurantTableController.update,
  )
  .delete(
    '/:id',
    validate(restaurantTableIdParamValidator, 'params'),
    restaurantTableController.delete,
  );

export default router;
