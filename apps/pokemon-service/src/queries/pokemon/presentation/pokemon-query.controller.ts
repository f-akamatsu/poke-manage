import { Controller } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  FetchAllPokemonRequest,
  FetchAllPokemonResponse,
  POKEMON_QUERY_PACKAGE_NAME,
  PokemonQueryServiceController,
  PokemonQueryServiceControllerMethods,
} from '@packages/protos/__generated__/pokemon/pokemon_query.interface';
import { FetchAllPokemonQuery } from '../application/fetch-all-pokemon.query';
import { PokemonRM } from '@prisma/client';

@PokemonQueryServiceControllerMethods()
@Controller(POKEMON_QUERY_PACKAGE_NAME)
export class PokemonQueryController implements PokemonQueryServiceController {
  constructor(private readonly queryBus: QueryBus) {}

  /**
   *
   */
  async fetchAllPokemon(
    _request: FetchAllPokemonRequest,
  ): Promise<FetchAllPokemonResponse> {
    const query = new FetchAllPokemonQuery();
    const queryResult = await this.queryBus.execute<
      FetchAllPokemonQuery,
      PokemonRM[]
    >(query);

    return toProtoMessage(queryResult);
  }
}

/**
 * ReadModel to ProtoMessage
 */
const toProtoMessage = (
  pokemonRMList: PokemonRM[],
): FetchAllPokemonResponse => {
  return {
    pokemonList: pokemonRMList.map((rm) => {
      return {
        id: rm.id,
        pokedexNo: rm.pokedex_no,
        name: rm.name,
      };
    }),
  };
};
