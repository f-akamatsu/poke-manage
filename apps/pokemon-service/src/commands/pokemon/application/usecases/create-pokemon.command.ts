import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { Pokemon } from '../../domain/entities/pokemon';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';
import { PokemonCreatedEvent } from '../../domain/events/pokemon-created.event';
import { EventEmitter2 } from '@nestjs/event-emitter';

/**
 * ポケモン新規登録
 */
export class CreatePokemonCommand implements ICommand {
  constructor(
    public readonly name: string,
    public readonly pokedexNo: number,
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
    private eventEmitter: EventEmitter2,
  ) {}

  /**
   *
   */
  async execute(command: CreatePokemonCommand): Promise<{ pokemonId: string }> {
    const event = new PokemonCreatedEvent(command.name, command.pokedexNo);
    const pokemon = Pokemon.create(event);
    await this.repository.save(pokemon);

    // ドメインイベント発行
    await this.eventEmitter.emitAsync('pokemon.created', {
      pokemonId: pokemon.pokemonId.value,
    });

    return { pokemonId: pokemon.pokemonId.value };
  }
}
