import { Module } from '@nestjs/common';
import { PokemonQueryController } from './presentation/pokemon-query.controller';

@Module({
  imports: [],
  controllers: [PokemonQueryController],
  providers: [],
})
export class PokemonQueryModule {}
