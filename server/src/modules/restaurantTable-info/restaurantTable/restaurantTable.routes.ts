import express from 'express';
import type { Router } from 'express';
import { validate } from '../../../shared/middlewares/validate.middleware.js';
import { createRestaurantTableArrayValidator } from './validators/createRestaurantTableArray.validator.js';
import { updateRestaurantTableArrayValidator } from './validators/updateRestaurantTableArray.validator.js';
import { deleteRestaurantTableArrayValidator } from './validators/deleteRestaurantTableArray.validator.js';
import { restaurantTableIdParamValidator } from './validators/restaurantTableIdParam.validator.js';
import { createRestaurantTableValidator } from './validators/createRestaurantTable.validator.js';
import { updateRestaurantTableValidator } from './validators/updateRestaurantTable.validator.js';
import RestaurantTableController from './restaurantTable.controller.js';
import { db } from '../../../infrastructures/database/index.database.js';
import RestaurantTableMapper from './mappers/restaurantTable.mapper.js';
import RestaurantTableRepository from './restaurantTable.repository.js';
import RestaurantTableService from './restaurantTable.service.js';
import { logger } from '../../../infrastructures/logger/logger.js';

const router: Router = express.Router();

/// Object declarations
const mMapper = new RestaurantTableMapper();
const mRepository = new RestaurantTableRepository(db, logger);
const mService = new RestaurantTableService(logger, mRepository, mMapper);
const mController = new RestaurantTableController(logger, mService);

/// RestaurantTable Batch Routes
router
  .get('', mController.getAll)
  .post(
    '/batch',
    validate(createRestaurantTableArrayValidator, 'body'),
    mController.createMany,
  )
  .patch(
    '/batch',
    validate(updateRestaurantTableArrayValidator, 'body'),
    mController.updateMany,
  )
  .delete(
    '/batch',
    validate(deleteRestaurantTableArrayValidator, 'body'),
    mController.deleteMany,
  );

/// RestaurantTable Single Routes
router
  .get(
    '/:id',
    validate(restaurantTableIdParamValidator, 'params'),
    mController.get,
  )
  .post('', validate(createRestaurantTableValidator), mController.create)
  .patch(
    '/:id',
    validate(restaurantTableIdParamValidator, 'params'),
    validate(updateRestaurantTableValidator, 'body'),
    mController.update,
  )
  .delete(
    '/:id',
    validate(restaurantTableIdParamValidator, 'params'),
    mController.delete,
  );

export default router;
