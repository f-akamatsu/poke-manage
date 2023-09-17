'use client';

import { client } from '@/apollo/client';
import { gql } from '@apollo/client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    client.query({
      query: gql`
        query {
          pokemonAll {
            id, name, pokedexNo
          }
        }
      `
    })
    .then((result) => {
      setData(result.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }, []);

  if (!data) return <p>Loading...</p>;

  console.log(data);
  return (
    <p>
      {JSON.stringify(data)}
    </p>
  );
}
