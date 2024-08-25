import { FragmentType } from '../../../gql/__generated__';
import {
  PokemonBaseStatsForm,
  PokemonBaseStatsFormFragment,
} from './PokemonBaseStatsForm/PokemonBaseStatsForm';

export interface PokemonDetailPresenterProps {
  pokemonBaseStatsFormFragment: FragmentType<typeof PokemonBaseStatsFormFragment>;
}

export function PokemonDetailPresenter({
  pokemonBaseStatsFormFragment,
}: PokemonDetailPresenterProps) {
  return <PokemonBaseStatsForm pokemonBaseStatsFormFragment={pokemonBaseStatsFormFragment} />;
}
