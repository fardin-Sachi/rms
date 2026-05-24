import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

// dotenv.config({
//     path: './server/.env',
// });

export default defineConfig({
  out: './src/infrastructures/database/drizzle',

  schema: './src/infrastructures/database/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
