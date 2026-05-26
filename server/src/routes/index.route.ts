import type { Router } from 'express';
import express from 'express';
import serverStatusRoutes from '../modules/serverState/serverStatus.routes.js';
import employeeRoutes from '../modules/employee/employee.routes.js';
import employeeSalaryRoutes from '../modules/employeeSalary/empSalary.routes.js';

export const router: Router = express.Router();

router.use('/v1/server', serverStatusRoutes);

router.use('/v1/employees', employeeRoutes);

router.use('/v1/employees', employeeSalaryRoutes);

export default router;
