import { DataSource } from 'typeorm';
import Book from './entities/book';
import User from './entities/user/user';
import ActivityEntry from './entities/activity-entry/activity-entry';
import Category from './entities/category/category';
import Donation from './entities/donation/donation';
import Post from './entities/post/post';

// export default new DataSource({
//   type: 'postgres',
//   host: process.env.DB_HOST || 'localhost',
//   port: parseInt(process.env.DB_PORT || '0', 10) || 5432,
//   username: process.env.DB_USER || 'postgres',
//   password: process.env.DB_PASS || 'postgres',
//   database: process.env.DB_NAME || 'postgres',
//   entities: [Book, User, ActivityEntry, Category, Donation, Post],
//   synchronize: true,
//   logging: true,
// });

export const db = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '0', 10) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'postgres',
  entities: [Book, User, ActivityEntry, Category, Donation, Post],
  synchronize: true,
  logging: true,
});

export async function clearDB() {
  const entities = db.entityMetadatas;
  const tableNames = entities
    .map((entity) => `"${entity.tableName}"`)
    .join(', ');
  await db.query(`TRUNCATE ${tableNames} RESTART IDENTITY CASCADE;`);
}
