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

export function PokedexList() {}
