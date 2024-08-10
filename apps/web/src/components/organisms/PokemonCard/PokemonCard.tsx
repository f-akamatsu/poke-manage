import { FragmentType } from '@/gql/__generated__';
import { PokemonCardFieldsFragment, PokemonCardPresenter } from './PokemonCardPresenter';

export interface PokemonCardProps {
  pokemonFragment: FragmentType<typeof PokemonCardFieldsFragment>;
  onClick: (pokemonId: string) => void;
}

export function PokemonCard({ pokemonFragment, onClick }: PokemonCardProps) {
  return <PokemonCardPresenter pokemonFragment={pokemonFragment} onClick={onClick} />;
}
