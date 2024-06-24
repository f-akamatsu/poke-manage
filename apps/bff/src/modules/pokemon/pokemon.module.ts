import { Module } from '@nestjs/common';
import { PokemonQueryResolver } from './resolvers/pokemon-query.resolver';

@Module({
  providers: [PokemonQueryResolver],
})
export class PokemonModule {}
