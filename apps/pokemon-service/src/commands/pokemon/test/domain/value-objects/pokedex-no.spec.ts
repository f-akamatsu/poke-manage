import { InvalidPokemonException } from '../../../domain/exceptions/invalid-pokemon.exception';
import { PokedexNo } from '../../../domain/value-objects/pokedex-no';

describe('PokedexNo', () => {
  describe('バリデーション', () => {
    it('1のときに値が正しいこと', () => {
      const pokedexNo = PokedexNo.from(1);
      expect(pokedexNo.value).toBe(1);
    });

    it('文字列のときエラーになること', () => {
      expect(() => PokedexNo.from('1' as never)).toThrow(
        InvalidPokemonException,
      );
    });

    it('0のときにエラーになること', () => {
      expect(() => PokedexNo.from(0)).toThrow(InvalidPokemonException);
    });

    it('1.5のときにエラーになること', () => {
      expect(() => PokedexNo.from(1.5)).toThrow(InvalidPokemonException);
    });
  });
});
