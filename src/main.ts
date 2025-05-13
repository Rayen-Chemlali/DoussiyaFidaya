import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NotificationWorkerModule } from './notification-worker/notification-worker.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: 'http://localhost:8080' });
  await app.listen(process.env.PORT ?? 3000);

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
