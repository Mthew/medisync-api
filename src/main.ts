import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { PresentationModule } from './presentation/presentation.module';
import { ErrorHandlerMiddleware } from './presentation/middlewares/error-handler.middleware';
import { LoggerService } from './infrastructure/services/logger.service';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(PresentationModule);
  const configService = app.get(ConfigService);

  // Global pipes
  app.useGlobalPipes(new ValidationPipe());

  // Global filters
  const logger = app.get(LoggerService);
  app.useGlobalFilters(new ErrorHandlerMiddleware(logger));

  // Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Patient Management API')
    .setDescription('API for managing patient records')
    .setVersion('1.0')
    .addTag('patients')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = configService.get<number>('PORT', 3000);
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
