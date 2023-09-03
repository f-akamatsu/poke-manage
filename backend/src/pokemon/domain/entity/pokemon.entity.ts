import { PokedexNo } from "../value/pokedexNo";
import { PokemonID } from "../value/pokemonId";
import { PokemonName } from "../value/pokemonName";

/**
 * ポケモン
 */
export class Pokemon {

  constructor(
    private _id: PokemonID,
    private _name: PokemonName,
    private _pokedexNo: PokedexNo
  ) {}

  public static create(id: string, name: string, pokedexNo: number): Pokemon {
    return new Pokemon(
      new PokemonID(id),
      new PokemonName(name),
      new PokedexNo(pokedexNo)
    );
  }
  
}