'use client';

import { useQuery } from 'urql';
import { graphql } from '../../../gql/__generated__';
import { PokemonListPresenter } from './PokemonListPresenter';

/** Query */
const FetchAllPokemonQuery = graphql(/* GraphQL */ `
  query FetchAllPokemon {
    fetchAllPokemon {
      ...PokemonFields
    }
  }
`);

export interface PokemonListProps {
  // empty
}

export function PokemonList({}: PokemonListProps) {
  const [result] = useQuery({ query: FetchAllPokemonQuery });

  const { data } = result;

  if (!data) return null;

  return <PokemonListPresenter pokemonFragments={data.fetchAllPokemon} />;
}
