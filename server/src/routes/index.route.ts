import type { Router } from 'express';
import express from 'express';
import serverStatusRoutes from '../modules/serverState/serverStatus.routes.js';
import employeeRoutes from '../modules/employee-info/employee/employee.routes.js';
import employeeSalaryRoutes from '../modules/employee-info/employeeSalary/empSalary.routes.js';
import customerRoutes from '../modules/customer-info/customer/customer.routes.js';
import memberRoutes from '../modules/customer-info/member/member.routes.js';
import foodMenuRoutes from '../modules/food/foodMenu/foodmenu.routes.js';
import foodPromotionRoutes from '../modules/food/foodPromotion/sharedIndex.route.js';
import orderRoutes from '../modules/order/sharedIndex.route.js';
import paymentRoutes from '../modules/payment-info/sharedIndex.route.js';

const router: Router = express.Router();

router.use('/v1/server', serverStatusRoutes);

router.use('/v1/employees', employeeRoutes);

router.use('/v1/employees', employeeSalaryRoutes);

router.use('/v1/customers', customerRoutes);

router.use('/v1/members', memberRoutes);

router.use('/v1/food-menus', foodMenuRoutes);

router.use('/v1/food-promotion', foodPromotionRoutes);

router.use('/v1/order', orderRoutes);

router.use('/v1/payment', paymentRoutes);

export default router;
