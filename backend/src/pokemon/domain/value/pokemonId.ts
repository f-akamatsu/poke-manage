import { v4 } from 'uuid';

/**
 * ポケモンID
 */
export class PokemonID {

  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  public static newId(): PokemonID {
    return new PokemonID(v4());
  }

  public equals(other: PokemonID): boolean {
    return this._value === other._value;
  }

  public toString(): string {
    return this._value;
  }
  
}