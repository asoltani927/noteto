import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisConfigOptions } from '../interfaces';

export const RedisConfig = (): RedisConfigOptions => ({
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  password: process.env.REDIS_PASSWORD,
  keyPrefix: process.env.REDIS_PREFIX,
  db: process.env.REDIS_DB,
  retryAttempts: 5,
  retryDelay: 5000,
});

export const RedisConfigAsync = {
  isGlobal: true,
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    host: configService.get<string>('REDIS_HOST'),
    port: configService.get<string>('REDIS_PORT'),
    password: configService.get<string>('REDIS_PASSWORD'),
    keyPrefix: configService.get<string>('REDIS_PREFIX'),
    db: configService.get<string>('REDIS_DB'),
    retryAttempts: 5,
    retryDelay: 5000,
  }),
};
