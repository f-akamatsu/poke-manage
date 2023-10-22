/**
 * UseCase ⇔ Presenter やりとり用
 */
export type PokemonType = {
  pokedexId: string;
  name: string;
  pokedexNo: number;
};

export type CreatePokemonType = {
  name: string;
  pokedexNo: number;
}

export type UpdatePokemonType = {
  pokedexId: string;
  name?: string;
  pokedexNo?: number;
}