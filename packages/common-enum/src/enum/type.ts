export class Type {
  private static _values = new Array<Type>();

  public static readonly NORMAL = new Type('01', 'ノーマル');
  public static readonly FIRE = new Type('02', 'ほのお');
  public static readonly WATER = new Type('03', 'みず');
  public static readonly ELECTRIC = new Type('04', 'でんき');
  public static readonly GRASS = new Type('05', 'くさ');
  public static readonly ICE = new Type('06', 'こおり');
  public static readonly FIGHTING = new Type('07', 'かくとう');
  public static readonly POISON = new Type('08', 'どく');
  public static readonly GROUND = new Type('09', 'じめん');
  public static readonly FLYING = new Type('10', 'ひこう');
  public static readonly PSYCHIC = new Type('11', 'エスパー');
  public static readonly BUG = new Type('12', 'むし');
  public static readonly ROCK = new Type('13', 'いわ');
  public static readonly GHOST = new Type('14', 'ゴースト');
  public static readonly DRAGON = new Type('15', 'ドラゴン');
  public static readonly DARK = new Type('16', 'あく');
  public static readonly STEEL = new Type('17', 'はがね');
  public static readonly FAIRY = new Type('18', 'フェアリー');

  private constructor(
    public readonly id: string,
    public readonly name: string,
  ) {
    Type._values.push(this);
  }

  public static get values(): Type[] {
    return this._values;
  }

  public static fromId(id: string): Type {
    const type = this._values.find((v) => v.id === id);
    if (!type) throw new Error('Type is not found !');
    return type;
  }
}
