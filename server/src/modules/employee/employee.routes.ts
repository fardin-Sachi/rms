import { logger } from '../../shared/libs/logger.js';
import express from 'express';
import type { Router } from 'express';
import EmployeeController from "./employee.controller.js";
import {EmployeeService} from "./employee.service.js";
import EmployeeRepository from "./employee.repository.js";
import {validate} from "../../shared/middlewares/validate.middleware.js";
import {createEmployeeSchema} from "./validators/createEmployee.schema.js";
import {employeeIdParamSchema} from "./validators/employeeIdParam.schema.js";
import {updateEmployeeSchema} from "./validators/updateEmployee.schema.js";
import {createEmployeeArraySchema} from "./validators/createEmployeeArray.schema.js";
import {updateEmployeeArraySchema} from "./validators/updateEmployeeArray.schema.js";
import {deleteEmployeeArraySchema} from "./validators/deleteEmployeeArray.schema.js";

const router: Router = express.Router();

/// Object declarations
const employeeRepository = new EmployeeRepository()

const employeeService = new EmployeeService(
    logger,
    employeeRepository
);

const employeeController = new EmployeeController(
    logger,
    employeeService
);

/// Batch Routes
router
    .get(
        '',
        employeeController.getAll
    )
    .post(
        '/batch',
        validate(createEmployeeArraySchema, "body"),
        employeeController.createMany
    )
    .patch(
        '/batch',
        validate(updateEmployeeArraySchema, "body"),
        employeeController.updateMany
    )
    .delete(
        '/batch',
        validate(deleteEmployeeArraySchema, "body"),
        employeeController.deleteMany
    );

/// Single Routes
router
    .get(
        '/:id',
        validate(employeeIdParamSchema, "params"),
        employeeController.get
    )
    .post(
        '',
        validate(createEmployeeSchema),
        employeeController.create
    )
    .patch(
        '/:id',
        validate(employeeIdParamSchema, "params"),
        validate(updateEmployeeSchema, "body"),
        employeeController.update
    )
    .delete(
        '/:id',
        validate(employeeIdParamSchema, "params"),
        employeeController.delete
    );

export default router;
