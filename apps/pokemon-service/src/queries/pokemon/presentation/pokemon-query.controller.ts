import { Controller } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  FetchAllPokemonRequest,
  FetchAllPokemonResponse,
  POKEMON_QUERY_PACKAGE_NAME,
  PokemonQueryServiceController,
  PokemonQueryServiceControllerMethods,
  Pokemon,
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
    const pokemonRMList = await this.queryBus.execute<
      FetchAllPokemonQuery,
      PokemonRM[]
    >(query);

    return {
      pokemonList: pokemonRMList.map(toProtoMessage),
    };
  }
}

/**
 * ReadModel to ProtoMessage
 */
const toProtoMessage = (pokemonRM: PokemonRM): Pokemon => {
  return {
    pokemonId: pokemonRM.pokemon_id,
    pokedexNo: pokemonRM.pokedex_no,
    name: pokemonRM.name,
  };
};
