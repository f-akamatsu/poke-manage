import { FragmentType, getFragmentData, graphql } from '@/gql/__generated__';
import { Flex } from '@chakra-ui/react';

export const PokemonCardFieldsFragment = graphql(/* GraphQL */ `
  fragment PokemonCardFields on Pokemon {
    pokemonId
    pokedexNo
    name
    typeId1
    typeId2
  }
`);

export interface PokemonCardPresenterProps {
  pokemonFragment: FragmentType<typeof PokemonCardFieldsFragment>;
}

export function PokemonCardPresenter({ pokemonFragment }: PokemonCardPresenterProps) {
  const pokemon = getFragmentData(PokemonCardFieldsFragment, pokemonFragment);

  return (
    <Flex flexDir='column'>
      <p>{pokemon.pokedexNo}</p>
      <p>{pokemon.name}</p>
      <p>{pokemon.typeId1}</p>
      <p>{pokemon.typeId2}</p>
    </Flex>
  );
}
