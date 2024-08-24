import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { POKEMON_COMMAND_PACKAGE_NAME } from '@packages/protos/__generated__/pokemon/pokemon_command.interface';
import { POKEMON_QUERY_PACKAGE_NAME } from '@packages/protos/__generated__/pokemon/pokemon_query.interface';
import { AppModule } from './app.module';

const PORT = 50051;

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: `0.0.0.0:${PORT}`,
        package: [POKEMON_QUERY_PACKAGE_NAME, POKEMON_COMMAND_PACKAGE_NAME],
        protoPath: [
          'node_modules/@packages/protos/apis/pokemon/pokemon_query.proto',
          'node_modules/@packages/protos/apis/pokemon/pokemon_command.proto',
        ],
      },
    },
  );
  await app.listen();
}
bootstrap();
