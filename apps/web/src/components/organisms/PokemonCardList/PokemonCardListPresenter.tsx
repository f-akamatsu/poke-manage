import { FragmentType } from '@/gql/__generated__';
import { PokemonCardFieldsFragment } from '../PokemonCard/PokemonCardPresenter';
import { Flex } from '@chakra-ui/react';
import { PokemonCard } from '../PokemonCard/PokemonCard';

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
      {pokemonFragments.map((f) => (
        <PokemonCard pokemonFragment={f} onClick={onClickPokemonCard} />
      ))}
    </Flex>
  );
}
