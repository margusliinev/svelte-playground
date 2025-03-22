import { drizzle } from 'drizzle-orm/mysql2';
import { env } from '$env/dynamic/private';
import mysql from 'mysql2/promise';
import * as schema from './schema';

if (!env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const client = await mysql.createConnection(env.DATABASE_URL);
export const db = drizzle(client, { schema, mode: 'default' });
