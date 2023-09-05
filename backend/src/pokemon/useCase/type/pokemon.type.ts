/**
 * UseCase ⇔ Presenter やりとり用
 */
export type PokemonType = {
  id: string;
  name: string;
  pokedexNo: number;
};

export type CreatePokemonType = {
  name: string;
  pokedexNo: number;
}

export type UpdatePokemonType = {
  id: string;
  name?: string;
  pokedexNo?: number;
}