import type {
  ErrorResponse,
  SuccessResponse,
} from '../interfaces/apiResponse.interface.js';
import type { Response } from 'express';

export class ApiResponse {
  static success<T>(
    res: Response,
    statusCode = 200,
    message = 'Success',
    data?: T,
    meta?: Record<string, unknown>,
  ): Response {

    const response: SuccessResponse<T> = {
      success: true,
      message,
      ...(data !== undefined && { data }),
      ...(meta !== undefined && { meta }),
    };

    return res.status(statusCode).json(response);
  }

  static error(
    res: Response,
    statusCode = 500,
    message = 'Internal Server Error',
    errors?: unknown,
    stack?: string,
  ): Response {

    const response: ErrorResponse = {
      success: false,
      message,
      ...(errors !== undefined && { errors }),
      ...(process.env.NODE_ENV !== 'production' &&
        stack !== undefined && { stack }),
    };

    return res.status(statusCode).json(response);
  }
}
