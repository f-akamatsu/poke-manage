import { Module } from '@nestjs/common';
import { PokemonQueryController } from './presentation/pokemon-query.controller';
import { FetchAllPokemonQueryHandler } from './application/fetch-all-pokemon.query';
import { FindPokemonQueryHandler } from './application/find-pokemon.query';

@Module({
  imports: [],
  controllers: [PokemonQueryController],
  providers: [FetchAllPokemonQueryHandler, FindPokemonQueryHandler],
})
export class PokemonQueryModule {}
