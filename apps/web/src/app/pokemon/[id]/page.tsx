'use client';

import { useParams } from 'next/navigation';

export default function PokemonPage() {
  const params = useParams();
  const id = params.id;
  return <>【{id}】</>; // TODO
}
