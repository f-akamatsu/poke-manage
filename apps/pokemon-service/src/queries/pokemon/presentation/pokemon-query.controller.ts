import { Controller } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import {
  FetchAllPokemonRequest,
  FetchAllPokemonResponse,
  FindPokemonRequest,
  FindPokemonResponse,
  Pokemon,
  POKEMON_QUERY_PACKAGE_NAME,
  PokemonQueryServiceController,
  PokemonQueryServiceControllerMethods,
} from '@packages/protos/__generated__/pokemon/pokemon_query.interface';
import { PokemonRM } from '@prisma/client';
import { FetchAllPokemonQuery } from '../application/fetch-all-pokemon.query';
import { FindPokemonQuery } from '../application/find-pokemon.query';

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

  /**
   *
   */
  async findPokemon(request: FindPokemonRequest): Promise<FindPokemonResponse> {
    const query = new FindPokemonQuery(request.pokemonId);
    const pokemonRM = await this.queryBus.execute<FindPokemonQuery, PokemonRM>(
      query,
    );

    return {
      pokemon: toProtoMessage(pokemonRM),
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
    typeId1: pokemonRM.type_id_1,
    typeId2: pokemonRM.type_id_2 ?? undefined,
  };
};
