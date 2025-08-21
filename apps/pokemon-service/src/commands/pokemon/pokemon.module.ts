import { Module } from '@nestjs/common';
import { PokemonEventSubscription } from './application/event-subscription/pokemon.event-subscription';
import { CreatePokemonCommandHandler } from './application/usecases/create-pokemon.command';
import { DeletePokemonCommandHandler } from './application/usecases/delete-pokemon.command';
import { UpdatePokemonBaseStatsCommandHandler } from './application/usecases/update-pokemon-base-stats.command';
import { UpdatePokemonNameCommandHandler } from './application/usecases/update-pokemon-name.command';
import { POKEMON_REPOSITORY_TOKEN } from './domain/repository/pokemon.repository.interface';
import { PokemonRepository } from './infrastructure/pokemon.repository';
import { PokemonController } from './presentation/pokemon.controller';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [
    CreatePokemonCommandHandler,
    UpdatePokemonNameCommandHandler,
    DeletePokemonCommandHandler,
    UpdatePokemonBaseStatsCommandHandler,
    PokemonEventSubscription,
    {
      provide: POKEMON_REPOSITORY_TOKEN,
      useClass: PokemonRepository,
    },
  ],
})
export class PokemonModule {}
