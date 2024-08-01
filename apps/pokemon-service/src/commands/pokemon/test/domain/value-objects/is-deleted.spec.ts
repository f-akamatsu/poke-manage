import { InvalidPokemonException } from '../../../domain/exceptions/invalid-pokemon.exception';
import { IsDeleted } from '../../../domain/value-objects/is-deleted';

describe('IsDeleted', () => {
  describe('バリデーション', () => {
    it('trueのときに値が正しいこと', () => {
      const isDeleted = IsDeleted.from(true);
      expect(isDeleted.value).toBe(true);
    });

    it('falseのときに値が正しいこと', () => {
      const isDeleted = IsDeleted.from(false);
      expect(isDeleted.value).toBe(false);
    });

    it('文字列のときエラーになること', () => {
      expect(() => IsDeleted.from('1' as never)).toThrow(
        InvalidPokemonException,
      );
    });

    it('数値のときエラーになること', () => {
      expect(() => IsDeleted.from(0 as never)).toThrow(InvalidPokemonException);
    });
  });
});
