import winston from 'winston';
import type { ILogger } from '../../shared/interfaces/logger.interface.js';
import ENV from '../../configs/index.config.js';
import fs from 'fs';

if (!fs.existsSync('logs')) {
  fs.mkdirSync('logs');
}

const customFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss',
  }),
  winston.format.json(),
);

const winstonInstance = winston.createLogger({
  level: ENV.serverEnv.NODE_ENV === 'production' ? 'info' : 'debug',
  format: customFormat,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] ${level}: ${message}`;
        }),
      ),
    }),
    new winston.transports.File({
      filename: './logs/error.log',
      level: 'error',
    }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

export class WinstonLogger implements ILogger {
  public info(message: string, meta?: Record<string, unknown>) {
    winstonInstance.info(message, meta);
  }
  public warn(message: string, meta?: Record<string, unknown>) {
    winstonInstance.warn(message, meta);
  }
  public error(message: string, meta?: Record<string, unknown>) {
    winstonInstance.error(message, meta);
  }
  public debug(message: string, meta?: Record<string, unknown>) {
    winstonInstance.debug(message, meta);
  }
}
