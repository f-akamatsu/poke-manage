import { FragmentType } from '@/gql/__generated__';
import { PokemonCardFieldsFragment, PokemonCardPresenter } from './PokemonCardPresenter';

export interface PokemonCardProps {
  pokemonFragment: FragmentType<typeof PokemonCardFieldsFragment>;
}

export function PokemonCard({ pokemonFragment }: PokemonCardProps) {
  return <PokemonCardPresenter pokemonFragment={pokemonFragment} />;
}
