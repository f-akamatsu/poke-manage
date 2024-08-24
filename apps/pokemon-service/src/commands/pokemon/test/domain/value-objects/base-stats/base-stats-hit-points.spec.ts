import { InvalidPokemonException } from '../../../../domain/exceptions/invalid-pokemon.exception';
import { BaseStatsHitPoints } from '../../../../domain/value-objects/base-stats/base-stats-hit-points';

describe('BaseStatsHitPoints', () => {
  describe('バリデーション', () => {
    it('100のとき、値が正しいこと', () => {
      const baseStatsHitPoints = BaseStatsHitPoints.from(100);
      expect(baseStatsHitPoints.value).toBe(100);
    });

    it('0のとき、値が正しいこと', () => {
      const baseStatsHitPoints = BaseStatsHitPoints.from(0);
      expect(baseStatsHitPoints.value).toBe(0);
    });

    it('文字列のとき、エラーになること', () => {
      expect(() => BaseStatsHitPoints.from('1' as never)).toThrow(
        InvalidPokemonException,
      );
    });

    it('-1のとき、エラーになること', () => {
      expect(() => BaseStatsHitPoints.from(-1)).toThrow(
        InvalidPokemonException,
      );
    });

    it('1.5（≠整数）のとき、エラーになること', () => {
      expect(() => BaseStatsHitPoints.from(1.5)).toThrow(
        InvalidPokemonException,
      );
    });
  });
});
