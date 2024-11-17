'use client';

import { useParams } from 'next/navigation';
import { PokemonDetail } from '../../../components/organisms/PokemonDetail/PokemonDetail';

export default function PokemonPage() {
  const params = useParams();
  const idParam = params.id;
  const pokemonId = Array.isArray(idParam) ? idParam[0] : idParam;

  return <PokemonDetail pokemonId={pokemonId} />;
}
