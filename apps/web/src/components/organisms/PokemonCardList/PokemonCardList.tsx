import { FragmentType } from '@/gql/__generated__';
import { PokemonCardFieldsFragment } from '../PokemonCard/PokemonCardPresenter';
import { PokemonCardListPresenter } from './PokemonCardListPresenter';

export interface PokemonCardListProps {
  pokemonFragments: FragmentType<typeof PokemonCardFieldsFragment>[];
  onClickPokemonCard: (pokemonId: string) => void;
}

export function PokemonCardList({ pokemonFragments, onClickPokemonCard }: PokemonCardListProps) {
  return (
    <PokemonCardListPresenter
      pokemonFragments={pokemonFragments}
      onClickPokemonCard={onClickPokemonCard}
    />
  );
}
