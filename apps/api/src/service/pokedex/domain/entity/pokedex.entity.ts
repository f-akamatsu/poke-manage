import { PokedexNo } from '../value/pokedexNo';
import { PokedexID } from '../value/pokedexId';
import { PokemonName } from '../value/pokemonName';

/**
 * ポケモン
 */
export class Pokedex {
  constructor(
    private _pokedexId: PokedexID,
    private _pokemonName: PokemonName,
    private _pokedexNo: PokedexNo
  ) {}

  public static create(pokedexId: string, pokemonName: string, pokedexNo: number): Pokedex {
    return new Pokedex(
      new PokedexID(pokedexId),
      new PokemonName(pokemonName),
      new PokedexNo(pokedexNo)
    );
  }

  public static createNew(pokemonName: string, pokedexNo: number): Pokedex {
    return new Pokedex(PokedexID.newId(), new PokemonName(pokemonName), new PokedexNo(pokedexNo));
  }

  /**
   * 連想配列に変換
   */
  public toArray() {
    return {
      pokedexId: this._pokedexId.toString(),
      pokemonName: this._pokemonName.toString(),
      pokedexNo: this._pokedexNo.toNumber(),
    };
  }

  public setPokemonName(pokemonName: PokemonName): void {
    this._pokemonName = pokemonName;
  }

  public setPokedexNo(pokedexNo: PokedexNo): void {
    this._pokedexNo = pokedexNo;
  }
}
