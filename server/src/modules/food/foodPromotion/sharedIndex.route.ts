import type { Router } from 'express';
import express from 'express';
import promotionRouter from './promotion/promotion.routes.js';
import discountRuleRouter from './discountRule/discountRule.routes.js';
import buyXGetYRuleRouter from './buyXGetYRule/BuyXGetYRule.routes.js';
import promotionFoodRouter from './promotionFood/promotionFood.routes.js';

const router: Router = express.Router();

router
  .use('/promotion', promotionRouter)
  .use('/discount-rule', discountRuleRouter)
  .use('/buy-x-get-y-rule', buyXGetYRuleRouter)
  .use('/promotion-food', promotionFoodRouter);

export default router;
