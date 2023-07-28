import { ConfigModule, ConfigService } from '@nestjs/config';

export const CacheConfigAsync = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const driver = configService.get<string>('CACHE_DRIVER');
    if (driver === 'redis') {
      return {
        isGlobal: true,
        // ttl: cache.ttl, // using ms package to parse 15m to timestamp.
        store: require('cache-manager-redis-store'),
        host: process.env.REDIS_HOST || 'localhost',
        port: parseInt(process.env.REDIS_PORT, 10) || 6379,
        db: process.env.REDIS_DB,
        password: process.env.REDIS_PASSWORD,
        keyPrefix: process.env.REDIS_PREFIX,
        ttl: undefined,
      };
    }
    return {
      isGlobal: true,
      ttl: configService.get<number>('CACHE_TTL'),
    };
  },
};
