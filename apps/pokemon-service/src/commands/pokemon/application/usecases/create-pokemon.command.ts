import { EVENT_STORE, EventStore } from '@event-nest/core';
import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { Pokemon } from '../../domain/entities/pokemon';
import { ObjectId } from 'mongodb';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';

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
  constructor(
    @Inject(POKEMON_REPOSITORY_TOKEN)
    private readonly repository: IPokemonRepository,
  ) {}

  async execute(command: CreatePokemonCommand): Promise<void> {
    const newId = new ObjectId().toString();
    const pokemon = Pokemon.createNew(newId, command.name, command.pokedexNo);
    this.repository.save(pokemon);
  }
}
