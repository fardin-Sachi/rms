import type { Router } from 'express';
import express from 'express';
import customerOrderRouter from './customer-order/customerOrder.route.js';
import orderDetailRouter from './orderDetail/orderDetail.route.js';
import orderStatusLogRouter from './orderStatusLog/orderStatusLog.route.js';

const router: Router = express.Router();

router
  .use('/customer-order', customerOrderRouter)
  .use('/order-detail', orderDetailRouter)
  .use('/order-status-log', orderStatusLogRouter);

export default router;
