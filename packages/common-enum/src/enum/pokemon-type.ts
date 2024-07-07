export class PokemonType {
  private static _values = new Array<PokemonType>();

  public static readonly NORMAL = new PokemonType('01', 'ノーマル');
  public static readonly FIRE = new PokemonType('02', 'ほのお');
  public static readonly WATER = new PokemonType('03', 'みず');
  public static readonly ELECTRIC = new PokemonType('04', 'でんき');
  public static readonly GRASS = new PokemonType('05', 'くさ');
  public static readonly ICE = new PokemonType('06', 'こおり');
  public static readonly FIGHTING = new PokemonType('07', 'かくとう');
  public static readonly POISON = new PokemonType('08', 'どく');
  public static readonly GROUND = new PokemonType('09', 'じめん');
  public static readonly FLYING = new PokemonType('10', 'ひこう');
  public static readonly PSYCHIC = new PokemonType('11', 'エスパー');
  public static readonly BUG = new PokemonType('12', 'むし');
  public static readonly ROCK = new PokemonType('13', 'いわ');
  public static readonly GHOST = new PokemonType('14', 'ゴースト');
  public static readonly DRAGON = new PokemonType('15', 'ドラゴン');
  public static readonly DARK = new PokemonType('16', 'あく');
  public static readonly STEEL = new PokemonType('17', 'はがね');
  public static readonly FAIRY = new PokemonType('18', 'フェアリー');

  private constructor(
    public readonly id: string,
    public readonly name: string,
  ) {
    PokemonType._values.push(this);
  }

  public static get values(): PokemonType[] {
    return this._values;
  }

  public static fromId(id: string): PokemonType {
    const type = this._values.find((v) => v.id === id);
    if (!type) throw new Error('Pokemon Type is not found !');
    return type;
  }
}
