import { EVENT_STORE, EventStore } from '@event-nest/core';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { randomUUID } from 'crypto';
import { Pokemon } from '../../domain/entities/pokemon';

/**
 * ポケモン新規登録
 */
export class CreatePokemonCommand implements ICommand {
  constructor(
    public readonly pokedexNo: number,
    public readonly name: string,
  ) {}
}

/**
 * ポケモン新規登録ユースケース
 */
@CommandHandler(CreatePokemonCommand)
export class CreatePokemonCommandHandler
  implements ICommandHandler<CreatePokemonCommand>
{
  constructor(@Inject(EVENT_STORE) private eventStore: EventStore) {}

  async execute(command: CreatePokemonCommand): Promise<void> {
    const newId = '507f1f77bcf86cd799439011'; // TODO
    const pokemon = Pokemon.createNew(newId, command.name, command.pokedexNo);
    const pokemonWithPublisher = this.eventStore.addPublisher(pokemon);
    await pokemonWithPublisher.commit();
  }
}
