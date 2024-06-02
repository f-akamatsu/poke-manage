import { Module } from '@nestjs/common';
import { PokemonQueryModule } from './queries/pokemon/pokemon-query.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [CommonModule, PokemonQueryModule],
})
export class AppModule {}
