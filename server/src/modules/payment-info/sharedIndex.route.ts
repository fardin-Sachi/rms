import type { Router } from 'express';
import express from 'express';
import paymentRouter from './payment/payment.routes.js';
import paymentStatusLogRouter from './payment-status-log/paymentStatusLog.routes.js';

const router: Router = express.Router();

router
  .use('/payment', paymentRouter)
  .use('/payment-status-log', paymentStatusLogRouter);

export default router;
