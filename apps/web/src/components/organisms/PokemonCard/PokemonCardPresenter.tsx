import { FragmentType, getFragmentData, graphql } from '@/gql/__generated__';
import { Flex, Spacer, Text } from '@chakra-ui/react';
import { TypeIcon } from '../TypeIcon';
import { padNumber } from '@/utils';

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
    <Flex padding={4} border='1px' width='240px' alignItems='center' gap={2} bgColor='white'>
      <Flex bgColor='red' w='50px' h='50px' borderRadius='50%' />
      <Flex flexDir='column' gap={1} flexGrow={1}>
        <Flex alignItems='center'>
          <Text color='gray.500' fontSize='xs'>
            No. {padNumber(pokemon.pokedexNo, 4)}
          </Text>
          <Spacer />
          <Flex gap={2}>
            <TypeIcon typeId={pokemon.typeId1} />
            {pokemon.typeId2 && <TypeIcon typeId={pokemon.typeId2} />}
          </Flex>
        </Flex>
        <Text fontSize='xl' fontWeight='bold'>
          {pokemon.name}
        </Text>
      </Flex>
    </Flex>
  );
}
