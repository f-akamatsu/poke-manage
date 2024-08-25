import { useQuery } from 'urql';
import { graphql } from '../../../gql/__generated__';
import { PokemonDetailPresenter } from './PokemonDetailPresenter';

/** Query */
const FindPokemonDetailQuery = graphql(/* GraphQL */ `
  query FindPokemonDetail($pokemonId: String!) {
    findPokemon(pokemonId: $pokemonId) {
      ...PokemonBaseStatsFormFields
    }
  }
`);

export interface PokemonDetailProps {
  pokemonId: string;
}

export function PokemonDetail({ pokemonId }: PokemonDetailProps) {
  const [{ data }] = useQuery({ query: FindPokemonDetailQuery, variables: { pokemonId } });

  if (!data) return null;

  return <PokemonDetailPresenter pokemonBaseStatsFormFragment={data.findPokemon} />;
}
