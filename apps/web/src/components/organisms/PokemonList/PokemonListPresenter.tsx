import { FragmentType, getFragmentData, graphql } from '@/gql/__generated__';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Link from 'next/link';

export const PokemonFieldsFragment = graphql(/* GraphQL */ `
  fragment PokemonFields on Pokemon {
    name
    pokedexNo
    pokemonId
  }
`);

export interface PokemonListPresenterProps {
  pokemonFragments: FragmentType<typeof PokemonFieldsFragment>[];
}

export function PokemonListPresenter({ pokemonFragments }: PokemonListPresenterProps) {
  const pokemonList = getFragmentData(PokemonFieldsFragment, pokemonFragments);

  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            <Th isNumeric>図鑑番号</Th>
            <Th>ポケモン</Th>
          </Tr>
        </Thead>
        <Tbody>
          {pokemonList.map((pokemon) => (
            <Tr key={pokemon.pokedexNo}>
              <Td isNumeric>{pokemon.pokedexNo}</Td>
              <Td>
                <Link href={`/pokemon/${pokemon.pokemonId}`}>{pokemon.name}</Link>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
