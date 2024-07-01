'use client';

import { Pokemon } from '@/components/organisms/Pokemon/Pokemon';
import { useParams } from 'next/navigation';

export default function PokemonPage() {
  const params = useParams();
  const idParam = params.id;
  const pokemonId = Array.isArray(idParam) ? idParam[0] : idParam;
  return <Pokemon pokemonId={pokemonId} />;
}
