import { FragmentType } from '@/gql/__generated__';
import { Flex } from '@chakra-ui/react';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { PokemonCardFieldsFragment } from '../PokemonCard/PokemonCardPresenter';

export interface PokemonCardListPresenterProps {
  pokemonFragments: FragmentType<typeof PokemonCardFieldsFragment>[];
  onClickPokemonCard: (pokemonId: string) => void;
}

export function PokemonCardListPresenter({
  pokemonFragments,
  onClickPokemonCard,
}: PokemonCardListPresenterProps) {
  return (
    <Flex wrap='wrap' gap={4}>
      {pokemonFragments.map((f, i) => (
        <PokemonCard key={i} pokemonFragment={f} onClick={onClickPokemonCard} />
      ))}
    </Flex>
  );
}
