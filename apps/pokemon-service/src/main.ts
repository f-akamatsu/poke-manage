import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { POKEMON_QUERY_PACKAGE_NAME } from '@packages/protos/__generated__/pokemon/pokemon_query.interface';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: [POKEMON_QUERY_PACKAGE_NAME],
        protoPath: [
          'node_modules/@packages/protos/apis/pokemon/pokemon_query.proto',
        ],
      },
    },
  );
  await app.listen();
}
bootstrap();
