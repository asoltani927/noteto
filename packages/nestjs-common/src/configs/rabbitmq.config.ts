import { ConfigModule, ConfigService } from '@nestjs/config';
import { RMQConfigOptions } from '../interfaces';

export const RMQConfig = (): RMQConfigOptions => ({
  host: process.env.RMQ_HOST || 'localhost',
  port: parseInt(process.env.RMQ_PORT, 10) || 5672,
  queue: process.env.RMQ_QUEUE,
});

export const RMQConfigAsync = {
  isGlobal: true,
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => ({
    host: configService.get<string>('RMQ_HOST'),
    port: configService.get<string>('RMQ_PORT'),
    queue: configService.get<string>('RMQ_PORT'),
    queueOptions: {
      durable: false,
    },
  }),
};
