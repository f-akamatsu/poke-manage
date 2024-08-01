import { InvalidPokemonException } from '../../../domain/exceptions/invalid-pokemon.exception';
import { PokemonName } from '../../../domain/value-objects/pokemon-name';

describe('PokemonName', () => {
  describe('バリデーション', () => {
    it('1文字のときに値が正しいこと', () => {
      const pokemonName = PokemonName.from('ア');
      expect(pokemonName.value).toBe('ア');
    });

    it('6文字のときに値が正しいこと', () => {
      const pokemonName = PokemonName.from('マフォクシー');
      expect(pokemonName.value).toBe('マフォクシー');
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
