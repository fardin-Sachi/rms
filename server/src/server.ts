import express from 'express';
import { logger } from './libs/logger.js';
import ENV from './configs/index.config.js';
import helmet from 'helmet';
import indexRouter from './routers/index.router.js';
import { notFoundHandler } from './middlewares/routeNotFoundHandler.middleware.js';
import { globalErrorHandler } from './middlewares/globalErrorHandler.middleware.js';

const app = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', indexRouter);

app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(ENV.serverEnv.PORT, () => {
  logger.info(`Server is running`, {
    meta: `PORT: ${ENV.serverEnv.PORT}`,
  });
});
