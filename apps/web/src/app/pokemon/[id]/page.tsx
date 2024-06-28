'use client';

import { useParams } from 'next/navigation';

export default function PokemonPage() {
  const params = useParams();
  const pokemonId = params.id;
  return <>【{pokemonId}】</>; // TODO
}
