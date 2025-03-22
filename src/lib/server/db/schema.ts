import { mysqlTable, varchar, bigint, timestamp, date, boolean } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users', {
	id: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	password: varchar({ length: 255 }).notNull(),
	birthday: date({ mode: 'date' }),
	is_verified: boolean().notNull().default(false),
	is_deleted: boolean().notNull().default(false),
	created_at: timestamp({ mode: 'date' }).notNull().defaultNow(),
	updated_at: timestamp({ mode: 'date' }).notNull().defaultNow().onUpdateNow()
});

export const sessionsTable = mysqlTable('sessions', {
	id: varchar({ length: 255 }).primaryKey(),
	user_id: bigint({ unsigned: true, mode: 'number' }).notNull().references(() => usersTable.id),
	expires_at: timestamp({ mode: 'date' }).notNull(),
	created_at: timestamp({ mode: 'date' }).notNull().defaultNow(),
	updated_at: timestamp({ mode: 'date' }).notNull().defaultNow().onUpdateNow()
});

export const postsTable = mysqlTable('posts', {
	id: bigint({ unsigned: true, mode: 'number' }).autoincrement().primaryKey(),
	user_id: bigint({ unsigned: true, mode: 'number' }).notNull().references(() => usersTable.id),
	title: varchar({ length: 255 }).notNull(),
	content: varchar({ length: 255 }).notNull(),
	is_deleted: boolean().notNull().default(false),
	created_at: timestamp({ mode: 'date' }).notNull().defaultNow(),
	updated_at: timestamp({ mode: 'date' }).notNull().defaultNow().onUpdateNow()
});

export type User = typeof usersTable.$inferSelect;
export type Session = typeof sessionsTable.$inferSelect;
export type Post = typeof postsTable.$inferSelect;

export type NewUser = typeof usersTable.$inferInsert;
export type NewSession = typeof sessionsTable.$inferInsert;
export type NewPost = typeof postsTable.$inferInsert;
