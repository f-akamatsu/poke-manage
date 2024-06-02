import { Controller } from '@nestjs/common';
import {
  FetchAllPokemonRequest,
  FetchAllPokemonResponse,
  POKEMON_QUERY_PACKAGE_NAME,
  PokemonQueryServiceController,
  PokemonQueryServiceControllerMethods,
} from '@packages/protos/__generated__/pokemon/pokemon_query.interface';

@PokemonQueryServiceControllerMethods()
@Controller(POKEMON_QUERY_PACKAGE_NAME)
export class PokemonQueryController implements PokemonQueryServiceController {
  async fetchAllPokemon(
    request: FetchAllPokemonRequest,
  ): Promise<FetchAllPokemonResponse> {
    return Promise.resolve({
      pokemonList: [{ id: 'dummy', pokedexNo: 0, name: 'DUMMY' }],
    });
  }
}
