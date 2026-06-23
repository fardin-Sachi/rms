import orderTableAssignmentRoutes from './orderTableAssignment/orderTableAssignment.routes.js';
import restaurantTableRoutes from './restaurantTable/restaurantTable.routes.js';
import express from 'express';
import type { Router } from 'express';

const router: Router = express.Router();

router
  .use('/restaurantTable-info', restaurantTableRoutes)
  .use('/orderTable', orderTableAssignmentRoutes);

export default router;
