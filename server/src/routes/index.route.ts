import type { Router } from 'express';
import express from 'express';
import serverStatusRouter from '../modules/serverState/serverStatus.routes.js'

export const router: Router = express.Router();


router.use(
    '/v1/server',
    serverStatusRouter
);

export default router;
