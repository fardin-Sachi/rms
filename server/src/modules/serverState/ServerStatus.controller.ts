import type { Request, Response } from 'express';
import { ApiResponse } from '../../shared/libs/apiResponse.js';
import type { ILogger } from '../../shared/interfaces/logger.interface.js';
import { TryCatch } from '../../shared/utils/TryCatch.js';
import {ServerStatusService} from "./serverStatus.service.js";

export class ServerStatusController {
  private readonly serverStatusService: ServerStatusService;
  constructor(private readonly logger: ILogger) {
    this.serverStatusService = new ServerStatusService(logger);
  }

  public health = TryCatch(async (req: Request, res: Response) => {
    const result = this.serverStatusService.getHealthStatus();

    this.logger.info('Server status checked', {
      url: `${req.protocol}://${req.get('host')}${req.originalUrl}`,
      message: result ?
          'Server is healthy' :
          'Server is DOWN'
    });

    return ApiResponse
        .success(
            res,
            200,
            'Server is healthy and running'
        );
  });
}
