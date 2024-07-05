import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  CreatePokemonRequest,
  CreatePokemonResponse,
  DeletePokemonRequest,
  POKEMON_COMMAND_PACKAGE_NAME,
  PokemonCommandServiceController,
  PokemonCommandServiceControllerMethods,
  UpdatePokemonRequest,
} from '@packages/protos/__generated__/pokemon/pokemon_command.interface';
import { CreatePokemonCommand } from '../application/usecases/create-pokemon.command';
import { UpdatePokemonCommand } from '../application/usecases/update-pokemon.command';
import { DeletePokemonCommand } from '../application/usecases/delete-pokemon.command';

@PokemonCommandServiceControllerMethods()
@Controller(POKEMON_COMMAND_PACKAGE_NAME)
export class PokemonController implements PokemonCommandServiceController {
  constructor(private readonly commandBus: CommandBus) {}

  /**
   *
   */
  async createPokemon(
    request: CreatePokemonRequest,
  ): Promise<CreatePokemonResponse> {
    const command = new CreatePokemonCommand(request.name, request.pokedexNo);
    const response = await this.commandBus.execute<
      CreatePokemonCommand,
      { pokemonId: string }
    >(command);
    return response;
  }

  /**
   *
   */
  async updatePokemon(request: UpdatePokemonRequest): Promise<void> {
    const command = new UpdatePokemonCommand(
      request.pokemonId,
      request.name,
      request.pokedexNo,
    );
    await this.commandBus.execute<UpdatePokemonCommand>(command);
  }

  /**
   *
   */
  async deletePokemon(request: DeletePokemonRequest): Promise<void> {
    const command = new DeletePokemonCommand(request.pokemonId);
    await this.commandBus.execute<DeletePokemonCommand>(command);
  }
}
