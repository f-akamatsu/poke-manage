import { Pokedex } from "./domain/entity/pokedex.entity";

export interface IPokedexRepository {

  findAll(): Promise<Pokedex[]>;
  findOne(id: string): Promise<Pokedex>;
  save(pokemon: Pokedex): Promise<Pokedex>;
  
}