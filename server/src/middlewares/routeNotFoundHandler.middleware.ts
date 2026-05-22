import type { Request, Response, NextFunction } from 'express';

import { RouteNotFoundError } from '../errors/RouteNotFoundError.js';

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(new RouteNotFoundError(`Route ${req.originalUrl} not found`));
};
