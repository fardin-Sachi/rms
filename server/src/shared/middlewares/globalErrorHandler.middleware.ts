import type { Request, Response, NextFunction } from 'express';

import { ZodError } from 'zod';

import { ApiResponse } from '../libs/apiResponse.js';
import { AppError } from '../errors/AppError.js';
import ENV from '../../configs/index.config.js';
import { logger } from '../libs/logger.js';
import { RouteNotFoundError } from '../errors/RouteNotFoundError.js';

const isDev = ENV.serverEnv.NODE_ENV === 'development';

export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let statusCode = 500;
  let message = 'Internal Server Error';
  let errors: unknown;

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  } else if (err instanceof ZodError) {
    statusCode = 400;
    message = 'Validation Error';
    errors = err.flatten().fieldErrors;
  } else if (err instanceof RouteNotFoundError) {
    statusCode = 404;
    message = 'Route not found';
    errors = err.message;
  } else {
    message = err.message || message;
  }

  if (statusCode === 500)
    logger.error('Internal server error', {
      message: err.message,
      stack: err.stack,
      path: req.originalUrl,
      method: req.method,
    });

  return ApiResponse.error(
    res,
    statusCode,
    message,
    errors,
    isDev ? err.stack : undefined,
  );
};
