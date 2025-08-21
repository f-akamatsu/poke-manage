import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { PokemonNameUpdatedEvent } from '../../domain/events/pokemon-name-updated.event';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';
import { PokemonId } from '../../domain/value-objects/pokemon-id';

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
  }
}
