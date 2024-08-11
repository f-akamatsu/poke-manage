'use client';

import { useParams } from 'next/navigation';

export default function PokemonPage() {
  const params = useParams();
  const idParam = params.id;
  const pokemonId = Array.isArray(idParam) ? idParam[0] : idParam;
  return (
    <>
      🚧 工事中... 🚧 <br />
      pokemonId: {pokemonId}
    </>
  );
}
