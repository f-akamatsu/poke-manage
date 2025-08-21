import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { PokemonDeletedEvent } from '../../domain/events/pokemon-deleted.event';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';
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
  }
}
