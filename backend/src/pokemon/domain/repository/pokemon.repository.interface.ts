import { Pokemon } from "../entity/pokemon.entity";

export interface IPokemonRepository {

  findAll(): Promise<Pokemon[]>;
  findOne(id: string): Promise<Pokemon>;
  save(pokemon: Pokemon): Promise<Pokemon>;
  
}