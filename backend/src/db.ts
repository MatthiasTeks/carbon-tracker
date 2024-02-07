import { DataSource } from 'typeorm';
import Book from './entities/book';
import User from './entities/user/user';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '0', 10) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'postgres',
  entities: [Book, User],
  synchronize: true,
  logging: true,
});
