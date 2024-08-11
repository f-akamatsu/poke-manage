import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';
import { PokemonNameUpdatedEvent as PokemonNameUpdatedEvent } from '../../domain/events/pokemon-name-updated.event';
import { PokemonId } from '../../domain/value-objects/pokemon-id';
import { EventEmitter2 } from '@nestjs/event-emitter';

/**
 * ポケモンの名前を変更する　コマンド
 */
export class UpdatePokemonNameCommand implements ICommand {
  constructor(
    public readonly pokemonId: string,
    public readonly name: string,
  ) {}
}

/**
 * ポケモンの名前を変更する　コマンドハンドラー
 */
@CommandHandler(UpdatePokemonNameCommand)
export class UpdatePokemonNameCommandHandler
  implements ICommandHandler<UpdatePokemonNameCommand>
{
  constructor(
    @Inject(POKEMON_REPOSITORY_TOKEN)
    private readonly repository: IPokemonRepository,
    private eventEmitter: EventEmitter2,
  ) {}

  /**
   *
   */
  async execute(command: UpdatePokemonNameCommand): Promise<void> {
    const event = new PokemonNameUpdatedEvent(command.name);
    const pokemon = await this.repository.findById(
      PokemonId.from(command.pokemonId),
    );
    pokemon.updateName(event);
    await this.repository.save(pokemon);

    // ドメインイベント発行
    await this.eventEmitter.emitAsync('pokemon.name-updated', pokemon);
  }
}
