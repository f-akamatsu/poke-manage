import { InvalidPokemonException } from '../../../../domain/exceptions/invalid-pokemon.exception';
import { BaseStatsSpeed } from '../../../../domain/value-objects/base-stats/base-stats-speed';

describe('BaseStatsSpeed', () => {
  describe('バリデーション', () => {
    it('100のとき、値が正しいこと', () => {
      const baseStatsSpeed = BaseStatsSpeed.from(100);
      expect(baseStatsSpeed.value).toBe(100);
    });

    it('0のとき、値が正しいこと', () => {
      const baseStatsSpeed = BaseStatsSpeed.from(0);
      expect(baseStatsSpeed.value).toBe(0);
    });

    it('文字列のとき、エラーになること', () => {
      expect(() => BaseStatsSpeed.from('1' as never)).toThrow(
        InvalidPokemonException,
      );
    });

    it('-1のとき、エラーになること', () => {
      expect(() => BaseStatsSpeed.from(-1)).toThrow(InvalidPokemonException);
    });

    it('1.5（≠整数）のとき、エラーになること', () => {
      expect(() => BaseStatsSpeed.from(1.5)).toThrow(InvalidPokemonException);
    });
  });
});
