import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const mailConfigAsync = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const config = {
      transport: {
        host: configService.get<string>('MAIL_HOST'),
        // ignoreTLS: true,
        secure: true,
        port: parseInt(configService.get<string>('MAIL_PORT')),
        auth: {
          user: configService.get<string>('MAIL_USERNAME'),
          pass: configService.get<string>('MAIL_PASSWORD'),
        },
      },
      defaults: {
        from: `"Carler Support" ${configService.get<string>('MAIL_FROM')}`,
      },
      template: {
        dir: join(process.cwd(), 'resources/templates'),
        adapter: new HandlebarsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    };
    return config;
  },
};
