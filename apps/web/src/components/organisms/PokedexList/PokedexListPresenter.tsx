import { FragmentType, getFragmentData, graphql } from '@/gql/__generated__';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

export const PokemonFieldsFragment = graphql(/* GraphQL */ `
  fragment PokemonFields on Pokemon {
    name
    pokedexNo
  }
`);

export interface PokedexListPresenterProps {
  pokemonFragments: FragmentType<typeof PokemonFieldsFragment>[];
}

export function PokedexListPresenter({ pokemonFragments }: PokedexListPresenterProps) {
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
              <Td>{pokemon.name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
