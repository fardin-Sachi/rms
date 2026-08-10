import { type Router } from 'express';
import { logger } from '../../../infrastructures/logger/logger.js';
import { db } from '../../../infrastructures/database/index.database.js';
import cache from '../../../infrastructures/cache/cache.factory.js';
import FoodMenuController from './foodMenu.controller.js';
import FoodMenuRepository from './foodMenu.repository.js';
import FoodMenuRouter from './foodMenu.routes.js';
import FoodMenuService from './foodMenu.service.js';
import FoodMenuMapper from './mappers/foodMenu.mapper.js';

class FoodMenuModule {
  public readonly router: Router;
  constructor() {
    const mapper = new FoodMenuMapper();
    const repository = new FoodMenuRepository(db, logger);
    const service = new FoodMenuService(logger, cache, repository, mapper);
    const controller = new FoodMenuController(logger, service);
    const router = new FoodMenuRouter(controller);
    this.router = router.router;
  }
}
const employeeSalaryModule = new FoodMenuModule();

export default employeeSalaryModule.router;
