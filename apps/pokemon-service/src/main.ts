import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { HERO_PACKAGE_NAME } from '@packages/protos/__generated__/hero/hero.interface';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: [HERO_PACKAGE_NAME],
        protoPath: ['node_modules/@packages/protos/apis/hero/hero.proto'],
      },
    },
  );
  await app.listen();
}
bootstrap();
