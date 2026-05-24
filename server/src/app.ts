import express, { type Express } from 'express';
import helmet from 'helmet';
import indexRouter from './routes/index.route.js';
import { notFoundHandler } from './shared/middlewares/routeNotFoundHandler.middleware.js';
import { globalErrorHandler } from './shared/middlewares/globalErrorHandler.middleware.js';

const app: Express = express();

app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', indexRouter);

app.use(notFoundHandler);
app.use(globalErrorHandler);

export { app };
