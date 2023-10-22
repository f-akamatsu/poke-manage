import { PokedexNo } from "../value/pokedexNo";
import { PokedexID } from "../value/pokedexId";
import { PokemonName } from "../value/pokemonName";

/**
 * ポケモン
 */
export class Pokedex {

  constructor(
    private _pokedexId: PokedexID,
    private _name: PokemonName,
    private _pokedexNo: PokedexNo
  ) {}

  public static create(pokedexId: string, name: string, pokedexNo: number): Pokedex {
    return new Pokedex(
      new PokedexID(pokedexId),
      new PokemonName(name),
      new PokedexNo(pokedexNo)
    );
  }

  public static createNew(name: string, pokedexNo: number): Pokedex {
    return new Pokedex(
      PokedexID.newId(),
      new PokemonName(name),
      new PokedexNo(pokedexNo)
    );
  }
  
  /**
   * 連想配列に変換
   */
  public toArray() {
    return {
      pokedexId: this._pokedexId.toString(),
      name: this._name.toString(),
      pokedexNo: this._pokedexNo.toNumber()
    };
  }

  public setName(name: PokemonName): void {
    this._name = name;
  }

  public setPokedexNo(pokedexNo: PokedexNo): void {
    this._pokedexNo = pokedexNo;
  }
  
}