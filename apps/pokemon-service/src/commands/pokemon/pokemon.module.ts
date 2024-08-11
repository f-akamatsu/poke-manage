import { Module } from '@nestjs/common';
import { PokemonController } from './presentation/pokemon.controller';
import { CreatePokemonCommandHandler } from './application/usecases/create-pokemon.command';
import { POKEMON_REPOSITORY_TOKEN } from './domain/repository/pokemon.repository.interface';
import { PokemonRepository } from './infrastructure/pokemon.repository';
import { UpdatePokemonNameCommandHandler } from './application/usecases/update-pokemon-name.command';
import { PokemonEventHandler } from './application/event-handlers/pokemon.event-handler';
import { DeletePokemonCommandHandler } from './application/usecases/delete-pokemon.command';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [
    CreatePokemonCommandHandler,
    UpdatePokemonNameCommandHandler,
    DeletePokemonCommandHandler,
    PokemonEventHandler,
    {
      provide: POKEMON_REPOSITORY_TOKEN,
      useClass: PokemonRepository,
    },
  ],
})
export class PokemonModule {}
