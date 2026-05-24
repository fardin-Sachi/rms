import {ServerStatusController} from "./ServerStatus.controller.js"
import {logger} from "../../shared/libs/logger.js";
import express from 'express';
import type { Router } from 'express';

export const router: Router = express.Router();

// Object declarations
const serverStatusController = new ServerStatusController(logger);

router.get(
    '/health',
    serverStatusController.health
);

export default router;