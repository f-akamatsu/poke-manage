import { FragmentType, getFragmentData, graphql } from '@/gql/__generated__';
import { Flex, Spacer, Text } from '@chakra-ui/react';
import { TypeIcon } from '../TypeIcon';
import { padNumber } from '@/utils';
import { NoImage } from '@/components/atoms/NoImage/NoImage';

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
    <Flex
      padding={4}
      border='1px'
      width='240px'
      alignItems='center'
      gap={4}
      bgColor='white'
      borderColor='gray.400'
      borderRadius='12px'
      borderBottomWidth='3px'
      cursor='pointer'
      _hover={{ bgColor: 'cyan.50' }}
      _active={{ borderBottomWidth: '1px', transform: 'translateY(2px)' }}
    >
      <NoImage />
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
