import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  CreatePokemonRequest,
  CreatePokemonResponse,
  POKEMON_COMMAND_PACKAGE_NAME,
  PokemonCommandServiceController,
  PokemonCommandServiceControllerMethods,
  UpdatePokemonRequest,
  UpdatePokemonResponse,
} from '@packages/protos/__generated__/pokemon/pokemon_command.interface';
import { CreatePokemonCommand } from '../application/usecases/create-pokemon.command';
import { UpdatePokemonCommand } from '../application/usecases/update-pokemon.command';

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
  async updatePokemon(
    request: UpdatePokemonRequest,
  ): Promise<UpdatePokemonResponse> {
    const command = new UpdatePokemonCommand(
      request.pokemonId,
      request.name,
      request.pokedexNo,
    );
    const response = await this.commandBus.execute<
      UpdatePokemonCommand,
      { pokemonId: string }
    >(command);
    return response;
  }
}
