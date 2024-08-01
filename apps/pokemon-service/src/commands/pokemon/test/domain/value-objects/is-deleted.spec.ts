import { InvalidPokemonException } from '../../../domain/exceptions/invalid-pokemon.exception';
import { IsDeleted } from '../../../domain/value-objects/is-deleted';

describe('IsDeleted', () => {
  describe('バリデーション', () => {
    it('trueのとき、値が正しいこと', () => {
      const isDeleted = IsDeleted.from(true);
      expect(isDeleted.value).toBe(true);
    });

    it('falseのとき、値が正しいこと', () => {
      const isDeleted = IsDeleted.from(false);
      expect(isDeleted.value).toBe(false);
    });

    it('文字列のとき、エラーになること', () => {
      expect(() => IsDeleted.from('1' as never)).toThrow(
        InvalidPokemonException,
      );
    });

    it('数値のとき、エラーになること', () => {
      expect(() => IsDeleted.from(0 as never)).toThrow(InvalidPokemonException);
    });
  });
});
