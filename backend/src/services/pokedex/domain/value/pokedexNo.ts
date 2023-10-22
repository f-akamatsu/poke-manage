/**
 * ポケモン図鑑NO
 */
export class PokedexNo {

  private readonly _value: number;

  constructor(value: number) {
    this._value = value;
  }

  public toNumber(): number {
    return this._value;
  }

}