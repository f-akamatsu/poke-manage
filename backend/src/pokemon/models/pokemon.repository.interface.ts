import { Pokemon } from "./pokemon.models";

export interface IPokemonRepository {
  findAll(): Promise<Pokemon[]>;
  findOne(id: string): Promise<Pokemon>;
}