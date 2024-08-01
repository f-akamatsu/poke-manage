import { InvalidPokemonException } from '../../../domain/exceptions/invalid-pokemon.exception';
import { PokemonId } from '../../../domain/value-objects/pokemon-id';

describe('PokemonId', () => {
  describe('バリデーション', () => {
    it('ObjectIDの形式のとき、値が正しいこと', () => {
      const pokemonId = PokemonId.from('507f1f77bcf86cd799439011');
      expect(pokemonId.value).toBe('507f1f77bcf86cd799439011');
    });

    it('16進数以外の文字が使用されているとき、エラーになること', () => {
      expect(() => PokemonId.from('507f1f77bcf86cd79943901g')).toThrow(
        InvalidPokemonException,
      );
    });

    it('1文字多いとき、エラーになること', () => {
      expect(() => PokemonId.from('507f1f77bcf86cd7994390110')).toThrow(
        InvalidPokemonException,
      );
    });

    it('1文字少ないとき、エラーになること', () => {
      expect(() => PokemonId.from('507f1f77bcf86cd79943901')).toThrow(
        InvalidPokemonException,
      );
    });

    it('数値のとき、エラーになること', () => {
      expect(() => PokemonId.from(0 as never)).toThrow(InvalidPokemonException);
    });
  });
});
