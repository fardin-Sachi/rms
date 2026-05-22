import { AppError } from './AppError.js';

export class RouteNotFoundError extends AppError {
  constructor(message = 'Resource not found') {
    super(message, 404);
  }
}
