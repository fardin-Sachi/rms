import { logger } from './infrastructures/logger/logger.js';
import ENV from './configs/index.config.js';
import { app } from './app.js';
import { bootstrap, shutdown } from './bootstrap.js';

let server: ReturnType<typeof app.listen>;
let shuttingDown = false;

async function startServer(): Promise<void> {
  try {
    await bootstrap();

    server = app.listen(ENV.serverEnv.PORT, () => {
      logger.info('Server started', {
        port: ENV.serverEnv.PORT,
      });
    });
  } catch (error) {
    logger.error('Failed to start server', {
      error,
    });

    process.exit(1);
  }
}

async function gracefulShutdown(signal: string): Promise<void> {
  if (shuttingDown) return;
  shuttingDown = true;
  logger.info(`${signal} received`);

  if (!server) {
    await shutdown();
    process.exit(0);
  }

  server.close(async () => {
    try {
      await shutdown();
    } finally {
      process.exit(0);
    }
  });
}

startServer();

process.on('SIGTERM', async () => {
  await gracefulShutdown('SIGTERM');
});

process.on('SIGINT', async () => {
  await gracefulShutdown('SIGINT');
});
