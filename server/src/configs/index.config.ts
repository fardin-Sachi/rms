import { serverEnv } from './env.config.js';
import { dbEnv } from './db.config.js';
import { inMemoryDbEnv } from './in-memory-db.config.js';

const ENV = {
  serverEnv,
  dbEnv,
  inMemoryDbEnv,
};

export default ENV;
