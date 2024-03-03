import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { PokedexData } from './PokedexList.schema';

export interface PokedexListPresenterProps {
  pokedexDataList: PokedexData[];
}

export function PokedexListPresenter({ pokedexDataList }: PokedexListPresenterProps) {
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
          {pokedexDataList.map((d) => (
            <Tr key={d.pokedexNo}>
              <Td isNumeric>{d.pokedexNo}</Td>
              <Td>{d.pokemonName}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
