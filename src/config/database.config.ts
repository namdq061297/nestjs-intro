import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DATABASE_HOST || 'localhost',
  port: +process.env.DATABASE_PORT || 5432,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  synchronize: process.env.DATABASE_SYNC == 'true' ? true : false,
  autoLoadEntities: process.env.DATABASE_AUTOLOAD == 'true' ? true : false,
}));