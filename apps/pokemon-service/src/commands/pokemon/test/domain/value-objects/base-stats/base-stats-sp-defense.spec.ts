import { InvalidPokemonException } from '../../../../domain/exceptions/invalid-pokemon.exception';
import { BaseStatsSpDefense } from '../../../../domain/value-objects/base-stats/base-stats-sp-defense';

describe('BaseStatsSpDefense', () => {
  describe('バリデーション', () => {
    it('100のとき、値が正しいこと', () => {
      const baseStatsSpDefense = BaseStatsSpDefense.from(100);
      expect(baseStatsSpDefense.value).toBe(100);
    });

    it('0のとき、値が正しいこと', () => {
      const baseStatsSpDefense = BaseStatsSpDefense.from(0);
      expect(baseStatsSpDefense.value).toBe(0);
    });

    it('文字列のとき、エラーになること', () => {
      expect(() => BaseStatsSpDefense.from('1' as never)).toThrow(
        InvalidPokemonException,
      );
    });

    it('-1のとき、エラーになること', () => {
      expect(() => BaseStatsSpDefense.from(-1)).toThrow(
        InvalidPokemonException,
      );
    });

    it('1.5（≠整数）のとき、エラーになること', () => {
      expect(() => BaseStatsSpDefense.from(1.5)).toThrow(
        InvalidPokemonException,
      );
    });
  });
});
