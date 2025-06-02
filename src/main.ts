import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NotificationWorkerModule } from './notification-worker/notification-worker.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  });

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: false,
  }));

  // Start the server
  const port = process.env.PORT || 4000;
  app.enableCors({ origin: 'http://localhost:8080' });
  await app.listen(port, '0.0.0.0');
  console.log(`Application is running on: http://localhost:${port}`);

  const worker = await NestFactory.createMicroservice(NotificationWorkerModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'notifications_queue',
      queueOptions: { durable: true, messageTtl: 86400000 },
    },
  });
  await worker.listen();
}
bootstrap();
