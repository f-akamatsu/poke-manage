import { Pokemon } from '../entities/pokemon';

export interface IPokemonRepository {
  findById(id: string): Promise<Pokemon>;
  save(pokemon: Pokemon): Promise<void>;
}

export const POKEMON_REPOSITORY_TOKEN = 'IPokemonRepository';
