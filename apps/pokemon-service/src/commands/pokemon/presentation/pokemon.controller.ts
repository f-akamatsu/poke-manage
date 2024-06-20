import { Controller } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import {
  CreatePokemonRequest,
  POKEMON_COMMAND_PACKAGE_NAME,
  PokemonCommandServiceController,
  PokemonCommandServiceControllerMethods,
} from '@packages/protos/__generated__/pokemon/pokemon_command.interface';
import { CreatePokemonCommand } from '../application/usecases/create-pokemon.command';

@PokemonCommandServiceControllerMethods()
@Controller(POKEMON_COMMAND_PACKAGE_NAME)
export class PokemonController implements PokemonCommandServiceController {
  constructor(private readonly commandBus: CommandBus) {}

  async createPokemon(request: CreatePokemonRequest): Promise<void> {
    const command = new CreatePokemonCommand(request.pokedexNo, request.name);
    await this.commandBus.execute(command);
  }
}
