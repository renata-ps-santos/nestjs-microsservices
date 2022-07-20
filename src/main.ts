import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
/**
 * Configuração de microsserviços com kafka
 * Especificação da URL kafka e consumer como user-consumer, que será usado mais tarde em client
 */
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'], //kafka url
        },
        consumer: {
          groupId: 'user-consumer',
        },
      },
    },
  );
  await app.listen();
}
bootstrap();
