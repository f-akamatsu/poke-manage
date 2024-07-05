import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Inject } from '@nestjs/common';
import { PokemonDeletedEvent } from '../../domain/events/pokemon-deleted.event';
import { PokemonId } from '../../domain/value-objects/pokemon-id';

/**
 * ポケモン削除
 */
export class DeletePokemonCommand implements ICommand {
  constructor(public readonly pokemonId: string) {}
}

/**
 * ポケモン削除ユースケース
 */
@CommandHandler(DeletePokemonCommand)
export class DeletePokemonCommandHandler
  implements ICommandHandler<DeletePokemonCommand>
{
  constructor(
    @Inject(POKEMON_REPOSITORY_TOKEN)
    private readonly repository: IPokemonRepository,
    private eventEmitter: EventEmitter2,
  ) {}

  /**
   *
   */
  async execute(command: DeletePokemonCommand): Promise<void> {
    const event = new PokemonDeletedEvent();
    const pokemon = await this.repository.findById(
      PokemonId.from(command.pokemonId),
    );
    pokemon.delete(event);
    await this.repository.save(pokemon);

    // ドメインイベント発行
    await this.eventEmitter.emitAsync('pokemon.deleted', pokemon);
  }
}
