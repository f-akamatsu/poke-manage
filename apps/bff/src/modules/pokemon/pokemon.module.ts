import { Module } from '@nestjs/common';
import { PokemonQueryResolver } from './resolvers/pokemon-query.resolver';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc-client.option';
import { PokemonQueryService } from './services/pokemon-query.service';

@Module({
  imports: [ClientsModule.register([grpcClientOptions.pokemonQuery])],
  providers: [PokemonQueryResolver, PokemonQueryService],
})
export class PokemonModule {}
