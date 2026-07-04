import type { ILogger } from '../../shared/interfaces/logger.interface.js';
import { WinstonLogger } from './winstonLogger.js';

export const logger: ILogger = new WinstonLogger();
