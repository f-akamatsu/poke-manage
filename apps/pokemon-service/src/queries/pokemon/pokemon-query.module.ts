import { Module } from '@nestjs/common';
import { PokemonQueryController } from './presentation/pokemon-query.controller';
import { FetchAllPokemonQueryHandler } from './application/fetch-all-pokemon.query';

@Module({
  imports: [],
  controllers: [PokemonQueryController],
  providers: [FetchAllPokemonQueryHandler],
})
export class PokemonQueryModule {}
