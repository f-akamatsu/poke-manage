'use client';

import { useQuery } from 'urql';
import { graphql } from '../../../gql/__generated__/';
import { PokedexListPresenter } from './PokedexListPresenter';

/** Query */
const FetchAllPokemonQuery = graphql(/* GraphQL */ `
  query FetchAllPokemon {
    fetchAllPokemon {
      ...PokemonFields
    }
  }
`);

export function PokedexList() {
  const [result] = useQuery({ query: FetchAllPokemonQuery });

  const { data } = result;

  if (!data) return null;

  return <PokedexListPresenter pokemonFragments={data.fetchAllPokemon} />;
}
