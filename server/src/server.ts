import { logger } from './shared/libs/logger.js';
import ENV from './configs/index.config.js';
import {app} from './app.js'


app.listen(ENV.serverEnv.PORT, () => {
  logger.info(`Server is running`, {
    meta: `PORT: ${ENV.serverEnv.PORT}`,
  });
});
