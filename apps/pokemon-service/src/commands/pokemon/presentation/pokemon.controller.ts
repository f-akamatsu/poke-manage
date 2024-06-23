import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  CreatePokemonRequest,
  POKEMON_COMMAND_PACKAGE_NAME,
  PokemonCommandServiceController,
  PokemonCommandServiceControllerMethods,
  UpdatePokemonRequest,
} from '@packages/protos/__generated__/pokemon/pokemon_command.interface';
import { CreatePokemonCommand } from '../application/usecases/create-pokemon.command';
import { UpdatePokemonCommand } from '../application/usecases/update-pokemon.command';

@PokemonCommandServiceControllerMethods()
@Controller(POKEMON_COMMAND_PACKAGE_NAME)
export class PokemonController implements PokemonCommandServiceController {
  constructor(private readonly commandBus: CommandBus) {}

  async createPokemon(request: CreatePokemonRequest): Promise<void> {
    const command = new CreatePokemonCommand(request.name, request.pokedexNo);
    await this.commandBus.execute(command);
  }

  async updatePokemon(request: UpdatePokemonRequest): Promise<void> {
    const command = new UpdatePokemonCommand(
      request.pokemonId,
      request.name,
      request.pokedexNo,
    );
    await this.commandBus.execute(command);
  }
}
