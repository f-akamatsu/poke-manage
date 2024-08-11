'use client';

import { useQuery } from 'urql';
import { graphql } from '@/gql/__generated__';
import { PokemonListPresenter } from './PokemonListPresenter';
import { useRouter } from 'next/navigation';

/** Query */
const FetchAllPokemonQuery = graphql(/* GraphQL */ `
  query FetchAllPokemon {
    fetchAllPokemon {
      ...PokemonCardFields
    }
  }
`);

export interface PokemonListProps {
  // empty
}

export function PokemonList({}: PokemonListProps) {
  const router = useRouter();
  const [result] = useQuery({ query: FetchAllPokemonQuery });

  const { data } = result;

  if (!data) return null;

  const handleClick = (pokemonId: string): void => {
    router.push(`/pokemon/${pokemonId}`);
  };

  return (
    <PokemonListPresenter
      pokemonFragments={data.fetchAllPokemon}
      onClickPokemonCard={handleClick}
    />
  );
}
