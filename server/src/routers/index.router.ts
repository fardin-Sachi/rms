import type { Router } from 'express';
import express from 'express';
import { logger } from '../libs/logger.js';
import { ServerStatus } from '../controllers/ServerStatus.controller.js';

const router: Router = express.Router();

const serverStatus = new ServerStatus(logger);

router.get('/v1/health', serverStatus.health);

export default router;
