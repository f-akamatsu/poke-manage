import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';
import { PokemonUpdatedEvent } from '../../domain/events/pokemon-updated.event';
import { PokemonId } from '../../domain/value-objects/pokemon-id';
import { EventEmitter2 } from '@nestjs/event-emitter';

/**
 * ポケモン更新
 */
export class UpdatePokemonCommand implements ICommand {
  constructor(
    public readonly pokemonId: string,
    public readonly name: string,
    public readonly pokedexNo: number,
  ) {}
}

/**
 * ポケモン更新ユースケース
 */
@CommandHandler(UpdatePokemonCommand)
export class UpdatePokemonCommandHandler
  implements ICommandHandler<UpdatePokemonCommand>
{
  constructor(
    @Inject(POKEMON_REPOSITORY_TOKEN)
    private readonly repository: IPokemonRepository,
    private eventEmitter: EventEmitter2,
  ) {}

  /**
   *
   */
  async execute(command: UpdatePokemonCommand): Promise<void> {
    const event = new PokemonUpdatedEvent(command.name, command.pokedexNo);
    const pokemon = await this.repository.findById(
      PokemonId.from(command.pokemonId),
    );
    pokemon.update(event);
    await this.repository.save(pokemon);

    // ドメインイベント発行
    await this.eventEmitter.emitAsync('pokemon.updated', pokemon);
  }
}
