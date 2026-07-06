import { logger } from '../logger/logger.js';

export async function connectDatabase() {
  logger.info('Database initialized');
}

export async function disconnectDatabase() {
  logger.info('Database shutdown');
}
