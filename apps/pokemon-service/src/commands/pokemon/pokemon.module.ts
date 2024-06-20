import { Module } from '@nestjs/common';
import { PokemonController } from './presentation/pokemon.controller';
import { CreatePokemonCommandHandler } from './application/usecases/create-pokemon.command';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [CreatePokemonCommandHandler],
})
export class PokemonModule {}
