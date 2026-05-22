import type { Request, Response } from 'express';
import { ApiResponse } from '../libs/apiResponse.js';
import type { ILogger } from '../interfaces/logger.interface.js';
import { TryCatch } from '../utils/TryCatch.js';

export class ServerStatus {
  constructor(private readonly logger: ILogger) {}

  public health = TryCatch(async (req: Request, res: Response) => {
    this.logger.info('Server status checked', {
      url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
      message: 'Server is healthy',
    });

    return ApiResponse.success(res, 200, 'Server is healthy and running');
  });
}
