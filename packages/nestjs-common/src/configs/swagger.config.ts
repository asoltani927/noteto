import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { INestApplication, VersioningType } from '@nestjs/common';

export interface ISwagger {
  base_url: string;
  local_url: string;
  dev_url: string;
  path: string;
  name: string;
}
/**
 * Swagger Configuration
 */
export class Swagger {
  /**
   * Constructor Swagger
   * @param app INestApplication
   * @param is
   */
  constructor(app: INestApplication, is: ISwagger) {
    app.enableVersioning({
      type: VersioningType.URI,
    });
    const documentBuilder = new DocumentBuilder()
      .setTitle(is.name)
      .setDescription(is.name + ' v1.0.1 ')
      .setVersion('1.0')
      .addBearerAuth();
    // @desc '' means production
    if (process.env.NODE_ENV !== '') {
      if (is.dev_url)
        documentBuilder.addServer(`${is.dev_url}`, 'development v1');
      documentBuilder.addServer(`${is.local_url}`, 'local v1');
    }
    documentBuilder.addServer(`${is.base_url}`, 'Base v1');
    const options = documentBuilder.build();
    const customOption: SwaggerCustomOptions = {
      swaggerOptions: {
        persistAuthorization: true,
      },
      explorer: true,
      customSiteTitle: is.name + ' API Docs',
    };
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(is.path, app, document, customOption);
  }
}
