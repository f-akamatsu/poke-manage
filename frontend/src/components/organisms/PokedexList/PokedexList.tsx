import { PokedexListPresenter } from './PokedexListPresenter';

const ALL_POKEDEX = /* GraphQL */ `
  query allPokedex {
    allPokedex {
      pokemonName
      moveByLevelUpList {
        moveId
        level
      }
    }
  }
`;

const mockData = [
  { pokedexNo: 1, pokemonName: 'フシギダネ' },
  { pokedexNo: 2, pokemonName: 'フシギソウ' },
  { pokedexNo: 3, pokemonName: 'フシギバナ' },
  { pokedexNo: 4, pokemonName: 'ヒトカゲ' },
  { pokedexNo: 5, pokemonName: 'リザード' },
  { pokedexNo: 6, pokemonName: 'リザードン' },
  { pokedexNo: 7, pokemonName: 'ゼニガメ' },
  { pokedexNo: 8, pokemonName: 'カメール' },
  { pokedexNo: 9, pokemonName: 'カメックス' },
];

export function PokedexList() {
  return <PokedexListPresenter pokedexDataList={mockData} />;
}
