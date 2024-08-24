import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  CreatePokemonRequest,
  CreatePokemonResponse,
  DeletePokemonRequest,
  POKEMON_COMMAND_PACKAGE_NAME,
  PokemonCommandServiceController,
  PokemonCommandServiceControllerMethods,
  UpdatePokemonBaseStatsRequest,
  UpdatePokemonNameRequest,
} from '@packages/protos/__generated__/pokemon/pokemon_command.interface';
import { CreatePokemonCommand } from '../application/usecases/create-pokemon.command';
import { DeletePokemonCommand } from '../application/usecases/delete-pokemon.command';
import { UpdatePokemonBaseStatsCommand } from '../application/usecases/update-pokemon-base-stats.command';
import { UpdatePokemonNameCommand } from '../application/usecases/update-pokemon-name.command';

@PokemonCommandServiceControllerMethods()
@Controller(POKEMON_COMMAND_PACKAGE_NAME)
export class PokemonController implements PokemonCommandServiceController {
  constructor(private readonly commandBus: CommandBus) {}

  /**
   * ポケモンを作成する
   */
  async createPokemon(
    request: CreatePokemonRequest,
  ): Promise<CreatePokemonResponse> {
    const command = new CreatePokemonCommand(
      request.name,
      request.pokedexNo,
      request.typeId1,
      request.typeId2,
    );
    const response = await this.commandBus.execute<
      CreatePokemonCommand,
      { pokemonId: string }
    >(command);
    return response;
  }

  /**
   * ポケモンの名前を変更する
   */
  async updatePokemonName(request: UpdatePokemonNameRequest): Promise<void> {
    const command = new UpdatePokemonNameCommand(
      request.pokemonId,
      request.name,
    );
    await this.commandBus.execute<UpdatePokemonNameCommand>(command);
  }

  /**
   * ポケモンを削除する
   */
  async deletePokemon(request: DeletePokemonRequest): Promise<void> {
    const command = new DeletePokemonCommand(request.pokemonId);
    await this.commandBus.execute<DeletePokemonCommand>(command);
  }

  /**
   * ポケモンの種族値を変更する
   */
  async updatePokemonBaseStats(
    request: UpdatePokemonBaseStatsRequest,
  ): Promise<void> {
    const command = new UpdatePokemonBaseStatsCommand(
      request.pokemonId,
      request.hitPoints,
      request.attack,
      request.defense,
      request.spAttack,
      request.spDefense,
      request.speed,
    );
    await this.commandBus.execute<UpdatePokemonBaseStatsCommand>(command);
  }
}
