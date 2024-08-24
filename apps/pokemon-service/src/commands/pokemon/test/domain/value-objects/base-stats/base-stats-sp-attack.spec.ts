import { InvalidPokemonException } from '../../../../domain/exceptions/invalid-pokemon.exception';
import { BaseStatsSpAttack } from '../../../../domain/value-objects/base-stats/base-stats-sp-attack';

describe('BaseStatsSpAttack', () => {
  describe('バリデーション', () => {
    it('100のとき、値が正しいこと', () => {
      const baseStatsSpAttack = BaseStatsSpAttack.from(100);
      expect(baseStatsSpAttack.value).toBe(100);
    });

    it('0のとき、値が正しいこと', () => {
      const baseStatsSpAttack = BaseStatsSpAttack.from(0);
      expect(baseStatsSpAttack.value).toBe(0);
    });

    it('文字列のとき、エラーになること', () => {
      expect(() => BaseStatsSpAttack.from('1' as never)).toThrow(
        InvalidPokemonException,
      );
    });

    it('-1のとき、エラーになること', () => {
      expect(() => BaseStatsSpAttack.from(-1)).toThrow(InvalidPokemonException);
    });

    it('1.5（≠整数）のとき、エラーになること', () => {
      expect(() => BaseStatsSpAttack.from(1.5)).toThrow(
        InvalidPokemonException,
      );
    });
  });
});
