import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    dialect: 'mysql',
    schema: './src/lib/server/db/schema.ts',
    out: './src/lib/server/db/migrations',
    migrations: { table: 'migrations' },
    dbCredentials: { url: process.env.DATABASE_URL! },
    verbose: true,
    strict: true,
});
