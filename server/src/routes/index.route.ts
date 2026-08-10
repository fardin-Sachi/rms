import { Router } from 'express';
import serverStatusRoutes from '../modules/serverState/serverStatus.routes.js';
import employeeRoutes from '../modules/employee-info/employee/employee.module.js';
import employeeSalaryRoutes from '../modules/employee-info/employeeSalary/empSalary.module.js';
import customerRoutes from '../modules/customer-info/customer/customer.module.js';
import memberRoutes from '../modules/customer-info/member/member.module.js';
import foodMenuRoutes from '../modules/food/foodMenu/foodMenu.module.js';
import foodPromotionRoutes from '../modules/food/foodPromotion/sharedIndex.route.js';
import orderRoutes from '../modules/order/sharedIndex.route.js';
import paymentRoutes from '../modules/payment-info/sharedIndex.route.js';
import restaurantTableInfoRoutes from '../modules/restaurantTable-info/sharedIndex.route.js';

const router: Router = Router();

router.use('/v1/server', serverStatusRoutes);

router.use('/v1/employees', employeeRoutes);

router.use('/v1/employees', employeeSalaryRoutes);

router.use('/v1/customers', customerRoutes);

router.use('/v1/members', memberRoutes);

router.use('/v1/food-menus', foodMenuRoutes);

router.use('/v1/food-promotions', foodPromotionRoutes);

router.use('/v1/orders', orderRoutes);

router.use('/v1/payments', paymentRoutes);

router.use('/v1/restaurantTable-infos', restaurantTableInfoRoutes);

export default router;
