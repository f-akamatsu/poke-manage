import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import { POKEMON_COMMAND_PACKAGE_NAME } from '@packages/protos/__generated__/pokemon/pokemon_command.interface';
import { POKEMON_QUERY_PACKAGE_NAME } from '@packages/protos/__generated__/pokemon/pokemon_query.interface';
import { join } from 'path';

export const grpcClientOptions: Record<string, ClientProviderOptions> = {
  pokemonQuery: {
    name: POKEMON_QUERY_PACKAGE_NAME,
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50051', // TODO env
      package: POKEMON_QUERY_PACKAGE_NAME,
      protoPath: join(
        process.cwd(),
        'node_modules/@packages/protos/apis/pokemon/pokemon_query.proto',
      ),
    },
  },
  pokemonCommand: {
    name: POKEMON_COMMAND_PACKAGE_NAME,
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50051', // TODO env
      package: POKEMON_COMMAND_PACKAGE_NAME,
      protoPath: join(
        process.cwd(),
        'node_modules/@packages/protos/apis/pokemon/pokemon_command.proto',
      ),
    },
  },
};
