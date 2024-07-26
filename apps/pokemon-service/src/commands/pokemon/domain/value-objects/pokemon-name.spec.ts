import { InvalidPokemonException } from '../exceptions/invalid-pokemon.exception';
import { PokemonName } from './pokemon-name';

describe('PokemonName', () => {
  describe('バリデーション', () => {
    it('1文字のときに値が正しいこと', () => {
      const actual = PokemonName.from('ア');
      expect(actual.value).toBe('ア');
    });

    it('6文字のときに値が正しいこと', () => {
      const actual = PokemonName.from('マフォクシー');
      expect(actual.value).toBe('マフォクシー');
    });

    it('数値のときエラーになること', () => {
      expect(() => PokemonName.from(0 as never)).toThrow(
        InvalidPokemonException,
      );
    });

    it('空文字のときエラーになること', () => {
      expect(() => PokemonName.from('')).toThrow(InvalidPokemonException);
    });

    it('7文字のときエラーになること', () => {
      expect(() => PokemonName.from('ミュウファイブ')).toThrow(
        InvalidPokemonException,
      );
    });
  });
});
