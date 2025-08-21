import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Pokemon } from '../../domain/entities/pokemon';
import { PokemonCreatedEvent } from '../../domain/events/pokemon-created.event';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';

/**
 * ポケモン新規登録
 */
export class CreatePokemonCommand implements ICommand {
  constructor(
    public readonly name: string,
    public readonly pokedexNo: number,
    public readonly typeId1: string,
    public readonly typeId2?: string,
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
    console.log('========== UseCase Start ==========');

    const event = new PokemonCreatedEvent(
      command.name,
      command.pokedexNo,
      command.typeId1,
      command.typeId2,
    );
    const pokemon = Pokemon.create(event);
    await this.repository.save(pokemon);

    // ドメインイベント発行
    await this.eventEmitter.emitAsync('pokemon.created', pokemon);

    console.log('========== UseCase End ==========');

    return { pokemonId: pokemon.pokemonId.value };
  }
}
