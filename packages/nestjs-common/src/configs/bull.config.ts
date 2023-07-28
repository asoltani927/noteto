import { ConfigModule, ConfigService } from '@nestjs/config';
import { QueueOptions } from 'bull';
import * as Redis from 'ioredis';
import { RedisConfig } from './redis.config';
import { SharedBullAsyncConfiguration } from '@nestjs/bull';

export const BullConfigAsync: SharedBullAsyncConfiguration = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async () => {
    const redisConfig = RedisConfig();
    return <QueueOptions>{
      redis: <Redis.RedisOptions>(<unknown>{
        ...redisConfig,
      }),
      defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: true,
      },
      limiter: {
        max: 1000,
        duration: 5000,
      },
      settings: {
        lockDuration: 300000,
      },
    };
  },
};
