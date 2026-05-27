import type { Router } from 'express';
import express from 'express';
import serverStatusRoutes from '../modules/serverState/serverStatus.routes.js';
import employeeRoutes from '../modules/employee/employee.routes.js';
import employeeSalaryRoutes from '../modules/employeeSalary/empSalary.routes.js';
import customerRoutes from '../modules/customer/customer.routes.js';
import memberRoutes from '../modules/member/member.routes.js';

export const router: Router = express.Router();

router.use('/v1/server', serverStatusRoutes);

router.use('/v1/employees', employeeRoutes);

router.use('/v1/employees', employeeSalaryRoutes);

router.use('/v1/customers', customerRoutes);

router.use('/v1/members', memberRoutes);

export default router;
