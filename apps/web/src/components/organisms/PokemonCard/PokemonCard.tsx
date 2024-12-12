import { getTypeColorCode, padNumber } from '@/common';
import { NoImage } from '@/components/atoms/NoImage/NoImage';
import { FragmentType, getFragmentData, graphql } from '@/gql/__generated__';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { TypeIcon } from '../TypeIcon/TypeIcon';

export const PokemonCardFieldsFragment = graphql(/* GraphQL */ `
  fragment PokemonCardFields on Pokemon {
    pokemonId
    pokedexNo
    name
    typeId1
    typeId2
  }
`);

export interface PokemonCardProps {
  pokemonFragment: FragmentType<typeof PokemonCardFieldsFragment>;
  onClick: (pokemonId: string) => void;
}

export function PokemonCard({ pokemonFragment, onClick }: PokemonCardProps) {
  const pokemon = getFragmentData(PokemonCardFieldsFragment, pokemonFragment);

  return (
    <Flex
      width='240px'
      bgColor='white'
      borderRadius='12px'
      borderBottomWidth='3px'
      cursor='pointer'
      _hover={{ bgColor: 'cyan.50' }}
      _active={{ borderBottomWidth: '1px', transform: 'translateY(2px)' }}
      onClick={() => {
        onClick(pokemon.pokemonId);
      }}
      overflow='hidden'
    >
      <Box w='8px' bgColor={getTypeColorCode(pokemon.typeId1)} />
      <Flex padding={4} alignItems='center' gap={4} flexGrow={1}>
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
    </Flex>
  );
}
