import { Module } from '@nestjs/common';
import { PokemonQueryResolver } from './resolvers/pokemon-query.resolver';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc-client.option';
import { PokemonQueryService } from './services/pokemon-query.service';
import { PokemonMutationResolver } from './resolvers/pokemon-mutation.resolver';
import { PokemonCommandService } from './services/pokemon-command.service';

@Module({
  imports: [
    ClientsModule.register([
      grpcClientOptions.pokemonQuery,
      grpcClientOptions.pokemonCommand,
    ]),
  ],
  providers: [
    PokemonQueryResolver,
    PokemonMutationResolver,
    PokemonQueryService,
    PokemonCommandService,
  ],
})
export class PokemonModule {}
