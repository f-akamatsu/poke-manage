import { v4 } from 'uuid';

/**
 * ポケモン図鑑ID
 */
export class PokedexID {
  private readonly _value: string;

  constructor(value: string) {
    this._value = value;
  }

  public static newId(): PokedexID {
    return new PokedexID(v4());
  }

  public equals(other: PokedexID): boolean {
    return this._value === other._value;
  }

  public toString(): string {
    return this._value;
  }
}
