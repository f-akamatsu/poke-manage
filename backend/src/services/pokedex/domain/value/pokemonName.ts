import { IllegalArgumentError } from "src/common/exception/illegalArgumentException";

/**
 * ポケモン種族名
 */
export class PokemonName {

  private readonly _value: string;

  constructor(value: string) {
    if (value.length === 0) throw new IllegalArgumentError('ポケモン名が設定されていません。');
    if (value.length > 6) throw new IllegalArgumentError('ポケモン名は6文字以内で設定してください。');
    if (!value.match(/^[ァ-ヶー２Ｚ・：]+$/)) throw new IllegalArgumentError('ポケモン名に使用できない文字が設定されています。');
    this._value = value;
  }

  public toString(): string {
    return this._value;
  }
  
}