import { Module } from '@nestjs/common';
import { PokemonController } from './presentation/pokemon.controller';
import { CreatePokemonCommandHandler } from './application/usecases/create-pokemon.command';
import { PokemonEventSubscription } from './application/event-subscriptions/pokemon.event-subscription';
import { POKEMON_REPOSITORY_TOKEN } from './domain/repository/pokemon.repository.interface';
import { PokemonRepository } from './infrastructure/pokemon.repository';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [
    CreatePokemonCommandHandler,
    PokemonEventSubscription,
    {
      provide: POKEMON_REPOSITORY_TOKEN,
      useClass: PokemonRepository,
    },
  ],
})
export class PokemonModule {}
