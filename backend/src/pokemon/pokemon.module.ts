import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonResolver } from './pokemon.resolver';

@Module({
  providers: [PokemonService, PokemonResolver]
})
export class PokemonModule {}
