import { FragmentType } from '@/gql/__generated__';
import { Flex } from '@chakra-ui/react';
import { PokemonCard, PokemonCardFieldsFragment } from '../PokemonCard';

export interface PokemonCardListProps {
  pokemonFragments: FragmentType<typeof PokemonCardFieldsFragment>[];
  onClickPokemonCard: (pokemonId: string) => void;
}

export function PokemonCardList({ pokemonFragments, onClickPokemonCard }: PokemonCardListProps) {
  return (
    <Flex wrap='wrap' gap={4}>
      {pokemonFragments.map((f, i) => (
        <PokemonCard key={i} pokemonFragment={f} onClick={onClickPokemonCard} />
      ))}
    </Flex>
  );
}
