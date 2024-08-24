import { Module } from '@nestjs/common';
import { FetchAllPokemonQueryHandler } from './application/fetch-all-pokemon.query';
import { FindPokemonQueryHandler } from './application/find-pokemon.query';
import { PokemonQueryController } from './presentation/pokemon-query.controller';

@Module({
  imports: [],
  controllers: [PokemonQueryController],
  providers: [FetchAllPokemonQueryHandler, FindPokemonQueryHandler],
})
export class PokemonQueryModule {}
