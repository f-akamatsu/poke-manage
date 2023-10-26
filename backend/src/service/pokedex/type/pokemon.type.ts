/**
 * service ⇔ endpoint やりとり用
 */
export type PokedexType = {
  pokedexId: string;
  pokemonName: string;
  pokedexNo: number;
};

export type CreatePokedexType = {
  pokemonName: string;
  pokedexNo: number;
}

export type UpdatePokedexType = {
  pokedexId: string;
  pokemonName?: string;
  pokedexNo?: number;
}