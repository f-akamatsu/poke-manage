import { Pokemon } from '../entities/pokemon';
import { PokemonId } from '../value-objects/pokemon-id';

export interface IPokemonRepository {
  findById(pokemonId: PokemonId): Promise<Pokemon>;
  save(pokemon: Pokemon): Promise<void>;
}

export const POKEMON_REPOSITORY_TOKEN = 'IPokemonRepository';
