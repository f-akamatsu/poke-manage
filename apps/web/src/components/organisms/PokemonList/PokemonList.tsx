'use client';

import { graphql } from '@/gql/__generated__';
import { useDisclosure } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { useQuery } from 'urql';
import { PokemonListPresenter } from './PokemonListPresenter';

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
  const createModalDisclosure = useDisclosure();
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
      createModalDisclosure={createModalDisclosure}
    />
  );
}
