/**
 * service ⇔ endpoint やりとり用
 */
export type PokedexType = {
  pokedexId: string;
  name: string;
  pokedexNo: number;
};

export type CreatePokedexType = {
  name: string;
  pokedexNo: number;
}

export type UpdatePokedexType = {
  pokedexId: string;
  name?: string;
  pokedexNo?: number;
}