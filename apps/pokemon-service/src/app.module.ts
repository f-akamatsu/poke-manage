import { Module } from '@nestjs/common';
import { PokemonQueryModule } from './queries/pokemon/pokemon-query.module';

@Module({
  imports: [PokemonQueryModule],
})
export class AppModule {}
