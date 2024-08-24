import { InvalidPokemonException } from '../../../../domain/exceptions/invalid-pokemon.exception';
import { BaseStatsDefense } from '../../../../domain/value-objects/base-stats/base-stats-defense';

describe('BaseStatsDefense', () => {
  describe('バリデーション', () => {
    it('100のとき、値が正しいこと', () => {
      const baseStatsDefense = BaseStatsDefense.from(100);
      expect(baseStatsDefense.value).toBe(100);
    });

    it('0のとき、値が正しいこと', () => {
      const baseStatsDefense = BaseStatsDefense.from(0);
      expect(baseStatsDefense.value).toBe(0);
    });

    it('文字列のとき、エラーになること', () => {
      expect(() => BaseStatsDefense.from('1' as never)).toThrow(
        InvalidPokemonException,
      );
    });

    it('-1のとき、エラーになること', () => {
      expect(() => BaseStatsDefense.from(-1)).toThrow(InvalidPokemonException);
    });

    it('1.5（≠整数）のとき、エラーになること', () => {
      expect(() => BaseStatsDefense.from(1.5)).toThrow(InvalidPokemonException);
    });
  });
});
