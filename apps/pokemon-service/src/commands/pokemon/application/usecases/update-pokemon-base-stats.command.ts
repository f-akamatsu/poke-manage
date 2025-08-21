import { Inject } from '@nestjs/common';
import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { PokemonBaseStatsUpdatedEvent } from '../../domain/events/pokemon-base-stats-updated.event';
import {
  IPokemonRepository,
  POKEMON_REPOSITORY_TOKEN,
} from '../../domain/repository/pokemon.repository.interface';
import { PokemonId } from '../../domain/value-objects/pokemon-id';

/**
 * ポケモンの種族値を変更する　コマンド
 */
export class UpdatePokemonBaseStatsCommand implements ICommand {
  constructor(
    public readonly pokemonId: string,
    public readonly hitPoints: number,
    public readonly attack: number,
    public readonly defense: number,
    public readonly spAttack: number,
    public readonly spDefense: number,
    public readonly speed: number,
  ) {}
}

/**
 * ポケモンの種族値を変更する　コマンドハンドラー
 */
@CommandHandler(UpdatePokemonBaseStatsCommand)
export class UpdatePokemonBaseStatsCommandHandler
  implements ICommandHandler<UpdatePokemonBaseStatsCommand>
{
  constructor(
    @Inject(POKEMON_REPOSITORY_TOKEN)
    private readonly repository: IPokemonRepository,
  ) {}

  /**
   *
   */
  async execute(command: UpdatePokemonBaseStatsCommand): Promise<void> {
    const event = new PokemonBaseStatsUpdatedEvent(
      command.hitPoints,
      command.attack,
      command.defense,
      command.spAttack,
      command.spDefense,
      command.speed,
    );
    const pokemon = await this.repository.findById(
      PokemonId.from(command.pokemonId),
    );
    pokemon.updateBaseStats(event);
    await this.repository.save(pokemon);
  }
}
