import { Module } from '@nestjs/common';
import { PokemonController } from './presentation/pokemon.controller';
import { CreatePokemonCommandHandler } from './application/usecases/create-pokemon.command';
import { PokemonEventSubscription } from './application/event-subscriptions/pokemon.event-subscription';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [CreatePokemonCommandHandler, PokemonEventSubscription],
})
export class PokemonModule {}
