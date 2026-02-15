import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    // Use DIRECT_URL for Prisma CLI commands (migrations)
    // Runtime queries use DATABASE_URL via the adapter in src/lib/prisma.ts
    url: env('DIRECT_URL'),
  },
});
